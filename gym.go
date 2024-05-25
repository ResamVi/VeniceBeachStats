package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
)

const (
    // Studio VeniceBeach Südstadt
    SUEDSTADT = "suedstadt"
    SUEDSTADT_URL = "https://venicebeach.api.actinate.com/gym/v1/studios/43?lang=en"

    // Studio VeniceBeach Postgalerie
    POSTGALERIE = "postgalerie"
    POSTGALERIE_URL = "https://venicebeach.api.actinate.com/gym/v1/studios/76?lang=en"
)

type CheckedInUsers struct {
    Current int `json:"current"`
}

type Studio struct {
    ID int `json:"id"`
    Name string `json:"name"`
    CheckedInUsers CheckedInUsers `json:"checkedInUsers"`
}

type Response struct {
    Studio Studio `json:"studio"`
}

var expiredErr = errors.New("token expired")

func getStudio(client http.Client, url string, token Token) (Studio, error) {
    req, err := http.NewRequest(http.MethodGet, url, nil)
    if err != nil {
        return Studio{}, fmt.Errorf("new request: %w", err)
    }
    req.Header.Add("Authorization", token.TokenType + " " + token.AccessToken)

    resp, err := client.Do(req)
    if err != nil {
        return Studio{}, fmt.Errorf("do: %w", err)
    }

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return Studio{}, fmt.Errorf("readAll: %w", err)
    }

    if resp.StatusCode == 498 { // Token expired
        return Studio{}, expiredErr
    }

    if resp.StatusCode < 200 || 299 < resp.StatusCode {
        return Studio{}, fmt.Errorf("%s (status code: %d)", string(body), resp.StatusCode)
    }

    var response Response

    err = json.Unmarshal(body, &response)
    if err != nil {
        return Studio{}, fmt.Errorf("unmarshal: %w", err)
    }

    return response.Studio, nil
}
