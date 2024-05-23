package main

import "net/http"

const AUTH_URL = "https://oauth.actinate.com/v6/oauth/token?lang=en"

type Token struct {
    AccessToken string `json:"access_token"`
    TokenType string `json:"token_type"`
    ExpiresIn int `json:"expires_in"`
    RefreshToken string `json:"refresh_token"` // TODO: huh?
}

var client = http.Client{
    Timeout: 30 * time.Second,
}

func authenticate(username, password string) (*Token, error) {
    data := url.Values{
        "grant_type": []string{"password"},
        "username": []string{username},
        "password": []string{password},
        "client_id": []string{"venicebeachV2"},
        "client_secret": []string{"@?Udu.YUS+ecZWJHQ(+rLcnGyM:e8p6p"},
        "app_version": []string{"6.1.5"},
        "os_version": []string{"34"},
        "os": []string{"android"},
    }

    req, err := http.NewRequest(http.MethodPost, AUTH_URL, strings.NewReader(data.Encode()))
    if err != nil {
        return nil, fmt.Errorf("new request: %w", err)
    }
    req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

    resp, err := client.Do(req)
    if err != nil {
        return nil, fmt.Errorf("do: %w", err)
    }
    defer resp.Body.Close()

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return nil, fmt.Errorf("readAll: %w", err)
    }

    if resp.StatusCode < 200 || 299 < resp.StatusCode {
        return nil, fmt.Errorf("status code: %d",resp.StatusCode)
    }

    var token Token

    err = json.Unmarshal(body, &token)
    if err != nil {
        return nil, fmt.Errorf("unmarshal: %w", err)
    }

    return &token, nil
}


