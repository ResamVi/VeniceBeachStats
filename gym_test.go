package main

import (
	"fmt"
	"net/http"
	"testing"
	"time"
)

func TestGetStudio(t *testing.T) {
    var client = http.Client{
	Timeout: 30 * time.Second,
    }
    token, err := authenticate(client, "<venicebeach_email>", "<venicebeach_password>")
    if err != nil {
        t.Error("authenticate should not fail. Wrong credentials?", err)
    }

    studio, err := getStudio(client, POSTGALERIE_URL, token)
    if err != nil {
        t.Error("getStudio should not fail")
    }

    if studio.CheckedInUsers.Current == 0 {
        t.Error("member count should not be zero")
    }

    fmt.Println(studio.ID, studio.Name)
}
