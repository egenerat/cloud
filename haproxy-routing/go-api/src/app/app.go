package main

import (
    "fmt"
    "log"
    "net/http"
)

func handlerApi(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    fmt.Fprintf(w, `{"message": "Hello world"}`)
}

func main() {
    http.HandleFunc("/", handlerApi)
    log.Fatal(http.ListenAndServe(":8080", nil))
}