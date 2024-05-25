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
	if isExpired(client, token) {
	    token, err = refreshToken(client, token)
	    if err != nil {
		discord.panic("'refreshToken' failed: " + err.Error())
	    }

	    slog.Info("refreshed token", slog.String("AccessToken", token.AccessToken), slog.Int("ExpiresIn", token.ExpiresIn))
	    discord.log("refreshed token")
	    continue
	}

	err = fetchData(client, db, discord, token, SUEDSTADT, SUEDSTADT_URL)
	if err != nil {
	    discord.panic("'fetchData' for suedstadt failed: " + err.Error())
	}

	err = fetchData(client, db, discord, token, POSTGALERIE, POSTGALERIE_URL,)
	if err != nil {
	    discord.panic("'fetchData' for postgalerie failed: " + err.Error())
	}


	time.Sleep(5 * time.Minute)
    }
}
func fetchData(client http.Client, db DB, discord discord, token Token, tableName, url string,) error {
    studio, err := getStudio(client, url, token)
    if err != nil {
	return fmt.Errorf("'getStudio' failed: %w", err)
    }

    err = db.insert(tableName, time.Now(), studio.CheckedInUsers.Current)
    if err != nil {
	return fmt.Errorf("'insert' failed: %w", err)
    }

    str := fmt.Sprintf("(%d) %s - %d", studio.ID, studio.Name, studio.CheckedInUsers.Current)

    slog.Info(str)
    discord.log(str)

    return nil
}
