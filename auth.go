package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
)

const AUTH_URL = "https://oauth.actinate.com/v6/oauth/token?lang=en"

type Token struct {
    AccessToken string `json:"access_token"`
    TokenType string `json:"token_type"`
    ExpiresIn int `json:"expires_in"`
    RefreshToken string `json:"refresh_token"` // TODO: huh?
}

func authenticate(client http.Client, email, password string) (Token, error) {
    data := url.Values{
        "grant_type": []string{"password"},
        "username": []string{email},
        "password": []string{password},
        "client_id": []string{"venicebeachV2"},
        "client_secret": []string{"@?Udu.YUS+ecZWJHQ(+rLcnGyM:e8p6p"},
        "app_version": []string{"6.1.5"},
        "os_version": []string{"34"},
        "os": []string{"android"},
    }

    req, err := http.NewRequest(http.MethodPost, AUTH_URL, strings.NewReader(data.Encode()))
    if err != nil {
        return Token{}, fmt.Errorf("new request: %w", err)
    }
    req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

    resp, err := client.Do(req)
    if err != nil {
        return Token{}, fmt.Errorf("do: %w", err)
    }
    defer resp.Body.Close()

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return Token{}, fmt.Errorf("readAll: %w", err)
    }

    if resp.StatusCode < 200 || 299 < resp.StatusCode {
        return Token{}, fmt.Errorf("%s (status code: %d)", string(body), resp.StatusCode)
    }

    var token Token

    err = json.Unmarshal(body, &token)
    if err != nil {
        return Token{}, fmt.Errorf("unmarshal: %w", err)
    }

    return token, nil
}

func isExpired(client http.Client, token Token) bool {
    req, err := http.NewRequest(http.MethodGet, SUEDSTADT_URL, nil)
    if err != nil {
        return false
    }
    req.Header.Add("Authorization", token.TokenType + " " + token.AccessToken)

    resp, err := client.Do(req)
    if err != nil {
        return false
    }
    defer resp.Body.Close()

    return resp.StatusCode == 498
}

func refreshToken(client http.Client, token Token) (Token, error) {
    data := url.Values{
        "client_id": []string{"venicebeachV2"},
        "client_secret": []string{"@?Udu.YUS+ecZWJHQ(+rLcnGyM:e8p6p"},
        "app_version": []string{"6.1.5"},
        "os_version": []string{"34"},
        "os": []string{"android"},
        "grant_type": []string{"refresh_token"},
        "refresh_token": []string{token.RefreshToken},
        "expired_access_token": []string{token.AccessToken},
    }

    req, err := http.NewRequest(http.MethodPost, AUTH_URL, strings.NewReader(data.Encode()))
    if err != nil {
        return Token{}, fmt.Errorf("new request: %w", err)
    }
    req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

    resp, err := client.Do(req)
    if err != nil {
        return Token{}, fmt.Errorf("do: %w", err)
    }
    defer resp.Body.Close()

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return Token{}, fmt.Errorf("readAll: %w", err)
    }

    if resp.StatusCode < 200 || 299 < resp.StatusCode {
        return Token{}, fmt.Errorf("%s (status code: %d)", string(body), resp.StatusCode)
    }

    var newToken Token

    err = json.Unmarshal(body, &newToken)
    if err != nil {
        return Token{}, fmt.Errorf("unmarshal: %w", err)
    }

    return newToken, nil

}
