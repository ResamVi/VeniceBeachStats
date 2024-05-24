FROM golang:1.22

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY *.go ./

ENV EMAIL="email"
ENV PASSWORD="password"
ENV WEBHOOK_URL="https://discord.com/api/webhooks/abc"

RUN go build -o venicebeach

CMD ["./venicebeach"]
