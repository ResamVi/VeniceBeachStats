FROM golang:1.22

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY *.go ./

ENV EMAIL="email"
ENV PASSWORD="password"
ENV WEBHOOK_URL="https://discord.com/api/webhooks/abc"

RUN CGO_ENABLED=0 GOOS=linux go build -o venicebeach

CMD ["./venicebeach"]
