package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"time"
)

const AUTH_URL = "https://oauth.actinate.com/v4/oauth/token"

func main() {
    req, err := http.NewRequest(http.MethodGet, AUTH_URL, nil)
    if err != nil {
        panic(err)
    }

    username := "username"
    if user := os.Getenv("USERNAME"); user != "" {
        username = user
    }

    password := "password"
    if pass := os.Getenv("PASSWORD"); pass != "" {
        password = pass
    }

    req.Header.Set("grant_type", "password")
    req.Header.Set("username", username)
    req.Header.Set("password", password)
    req.Header.Set("client_id", "venicebeachV2")
    req.Header.Set("client_secret", "@?Udu.YUS+ecZWJHQ(+rLcnGyM:e8p6p")
    req.Header.Set("app_version", "6.1.5")
    req.Header.Set("os_version", "34")
    req.Header.Set("os", "android")

    client := http.Client{
        Timeout: 30 * time.Second,
    }

    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        panic(err)
    }
    fmt.Println(string(body))

    type Authentication struct {
        AccessToken string `json:"access_token"`
        TokenType string `json:"token_type"`
        ExpiresIn int `json:"expires_in"`
        RefreshToken string `json:"refresh_token"` // TODO: huh?
    }

    var auth Authentication
    err = json.Unmarshal(body, &auth)
    if err != nil {
        panic(err)
    }

    fmt.Printf("%+v", auth)
}

