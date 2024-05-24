# VeniceBeachStats

## Setup

Docker:
```
docker build . -t venicebeach
docker run -e EMAIL='<venicebeach_email>' PASSWORD='<venicebeach_pass>' venicebeach
```

From Source:
```
EMAIL='<venicebeach_email>' PASSWORD='<venicebeach_pass>' go run *.go 
```

Optional third parameter to get notified via Discord using webhooks:
```
EMAIL='<venicebeach_email>' PASSWORD='<venicebeach_pass>' WEBHOOK_URL='<https://discord.com/api/webhooks/abc..>' go run *.go 
```
