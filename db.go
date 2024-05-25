package main

import (
	"database/sql"
	"fmt"
	"time"

	_ "github.com/mattn/go-sqlite3"
)
type DB struct {
    db *sql.DB
}

func (db DB) insert(studioName string, date time.Time, count int) error {
    query := fmt.Sprintf("INSERT INTO %s(date, count) VALUES (?, ?)", studioName)
    _, err := db.db.Exec(query, date.Format(time.DateTime), count)
    if err != nil {
        return fmt.Errorf("exec: %w", err)
    }

    return nil
}

func getDatabase() (DB, error) {
    db, err := sql.Open("sqlite3", "./venicebeach.db")
    if err != nil {
        return DB{}, fmt.Errorf("open: %w", err)
    }

    sqlStmt := `
        CREATE TABLE IF NOT EXISTS suedstadt (date TEXT NOT NULL PRIMARY KEY, count INTEGER);
        CREATE TABLE IF NOT EXISTS postgalerie (date TEXT NOT NULL PRIMARY KEY, count INTEGER);
    `
    _, err = db.Exec(sqlStmt)
    if err != nil {
        return DB{}, fmt.Errorf("exec: %w", err)
    }

    return DB{ db: db }, nil
}
