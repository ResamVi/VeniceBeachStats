package main

import (
	"net/http"
	"testing"
	"time"
)

func TestAuth(t *testing.T) {
    var client = http.Client{
	Timeout: 30 * time.Second,
    }
    token, err := authenticate(client, "<venicebeach_email>", "<venicebeach_password>")
    if err != nil {
        t.Error("authenticate should not fail. Wrong credentials?", err)
    }

    if token.AccessToken == "" {
	t.Error("access token should not be empty")
    }

    token, err = refreshToken(client, token)
    if err != nil {
	t.Error("refreshToken should not fail")
    }

    if token.AccessToken == "" {
	t.Error("refreshed access token should not be empty")
    }
}
