# VeniceBeachStats

Collects samples how many members are currently working out at the [VeniceBeach gym](https://www.venicebeach-fitness.de/clubs/venicebeach/karlsruhe/) in Karlsruhe. 
This data can be further analysed to answer the question when the gym is at its most empty state so I may workout without feeling too self-conscious, haha!

## Setup

Run:
```
docker run -e EMAIL='<venicebeach_email>' -e PASSWORD='<venicebeach_password>' ghcr.io/resamvi/venicebeachstats:latest
```

Sample output:
```
2024/05/24 13:35:13 INFO Start Authenticating Email=my-email@gmail.com
2024/05/24 13:35:15 INFO Authentication succesful AccessToken=eyJh... ExpiresIn=1618
2024/05/24 13:35:15 INFO Start fetching
2024/05/24 13:35:16 INFO (43) VeniceBeach Karlsruhe Südstadt - 60
```

You will find a `venicebeach.db` sqlite3 file inside the container at `/app` containing all collected samples in a `suedstadt` table.

Run image locally:
```
docker build . -t venicebeach
docker run -e EMAIL='<venicebeach_email>' PASSWORD='<venicebeach_pass>' venicebeach
```

Run binary locally:
```
EMAIL='<venicebeach_email>' PASSWORD='<venicebeach_pass>' go run *.go 
```

Optional third parameter to get notified via Discord using webhooks:
```
EMAIL='<venicebeach_email>' PASSWORD='<venicebeach_pass>' WEBHOOK_URL='<https://discord.com/api/webhooks/abc..>' go run *.go 
```
