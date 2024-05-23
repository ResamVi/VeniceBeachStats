package main

import (
	"encoding/json"
	"flag"
	"fmt"
)

func main() {
    username := flag.String("username", "myuser", "Username for login")
    password := flag.String("password", "mypassword", "Password for login")

    flag.Parse()

    token, err := authenticate(*username, *password)
    if err != nil {
        panic(err)
    }

    pretty, err := json.MarshalIndent(token, "", "\t")
    if err != nil {
        panic(err)
    }

    fmt.Println(string(pretty))
}

