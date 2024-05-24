package main

import (
	"fmt"
	"log/slog"
	"net/http"
	"time"

	"github.com/caarlos0/env"
)

type config struct {
    Email string `env:"EMAIL"`
    Password string `env:"PASSWORD"`
    WebhookURL string `env:"WEBHOOK_URL"`
}

func main() {
    cfg := config{}
    if err := env.Parse(&cfg); err != nil {
	panic(err)
    }

    db, err := getDatabase()
    if err != nil {
	panic(err)
    }

    var client = http.Client{
	Timeout: 30 * time.Second,
    }

    var discord = discord{
	url: cfg.WebhookURL,
    }

    slog.Info("Start Authenticating", slog.String("Email", cfg.Email))

    token, err := authenticate(client, cfg.Email, cfg.Password)
    if err != nil {
	discord.panic("'authenticate' failed: " + err.Error())
    }

    slog.Info("Authentication succesful", slog.String("AccessToken", token.AccessToken), slog.Int("ExpiresIn", token.ExpiresIn))
    slog.Info("Start fetching")

    for {
	studio, err := getStudio(client, token)
	if err != nil {
	    discord.panic("'getStudio' failed: " + err.Error())
	}

	err = db.insert(time.Now(), studio.CheckedInUsers.Current)
	if err != nil {
	    discord.panic("'insert' failed: " + err.Error())
	}

	str := fmt.Sprintf("(%d) %s - %d", studio.ID, studio.Name, studio.CheckedInUsers.Current)

	slog.Info(str)
	discord.log(str)

	time.Sleep(5 * time.Minute)
    }
}
