package main

import (
	"fmt"
	"net/http"
	"net/url"
)

const MyURL = "https://jsonplaceholder.typicode.com/posts/2"

func main() {
	fmt.Println("Namaste, Handling web request, handling URL in golang")

	// First, make the HTTP request
	resp, err := http.Get(MyURL) // Changed 'url' to 'MyURL'
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	// Parse the URL to get its components
	parsedURL, err := url.Parse("https://example.com/path?key=value") // Parse the URL using url.Parse
	if err != nil {
		panic(err)
	}

	// URL Components
	// Now print the URL components from parsedURL (not from resp)
	fmt.Println("Scheme:", parsedURL.Scheme)
	fmt.Println("Host:", parsedURL.Host)
	fmt.Println("Host:", parsedURL.Path)
	fmt.Println("Host:", parsedURL.Port())
	fmt.Println("Host:", parsedURL.RawQuery)

	// Get all query parameters
	params := parsedURL.Query() // Returns url.Values (map[string][]string)

	// Read specific parameter
	value := params.Get("key")

	fmt.Println(value)

	newURL := &url.URL{
		Scheme:   "https",
		Host:     "example.com",
		Path:     "/api",
		RawQuery: "key=value",
	}
	urlString := newURL.String()

	fmt.Println(urlString)
}
