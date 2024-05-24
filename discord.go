package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type discord struct {
    url string
}

func (d discord) notify(content string) error {
    return d.post("@everyone " + content, "everyone")
}

func (d discord) log(content string) error {
    return d.post(content)
}

func (d discord) post(content string, mention ...string) error {
    payload := new(bytes.Buffer)

    type allowedMentions struct {
        Parse []string `json:"parse"`
    }

    type message struct {
        Content         string          `json:"content"`
        AllowedMentions allowedMentions `json:"allowed_mentions"`
    }

    err := json.NewEncoder(payload).Encode(message{
        Content:         content,
        AllowedMentions: allowedMentions{
            Parse: mention,
        },
    })
    if err != nil {
        return err
    }

    resp, err := http.Post(d.url, "application/json", payload)
    if err != nil {
        return err
    }

    if resp.StatusCode != 200 && resp.StatusCode != 204 {
        defer resp.Body.Close()

        responseBody, err := io.ReadAll(resp.Body)
        if err != nil {
            return err
        }

        return fmt.Errorf(string(responseBody))
    }

    return nil
}
