package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"net/http"
	"time"
)

func main() {
	username := flag.String("username", "myuser", "Username for login")
	password := flag.String("password", "mypassword", "Password for login")
	webhookURL := flag.String("webhookurl", "https://discord.com/api/webhooks/abcdef", "Optional notifications if something goes wrong")

	flag.Parse()

	var client = http.Client{
		Timeout: 30 * time.Second,
	}

	var discord = discord{
		url: *webhookURL,
	}

	token, err := authenticate(client, *username, *password)
	if err != nil {
		discord.notify("'authenticate' failed")
		panic(err)
	}

	studio, err := getStudio(client, token)
	if err != nil {
		discord.notify("'getStudio' failed")
		panic(err)
	}

	pretty, err := json.MarshalIndent(studio, "", "\t")
	if err != nil {
		panic(err)
	}
	fmt.Println(string(pretty))
}
