package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello Day 3 Halding the time, Memory managment using new() and make(), pointers and Arrays")

	// presentTime := time.Now()

	// fmt.Println(presentTime.Format("01-02-2006 02-34-23 friday"))

	// createDate := time.Date(2024, time.March, 06, 10, 24, 20, 23, time.UTC)
	// fmt.Println(createDate.Format("01-02-2006 Sunday"))

	// var nums int = 20
	// fmt.Println("nums:= ", nums)

	// pointer

	// null pointer
	// var numPtr *int
	// fmt.Println(numPtr)

	// var val int = 28
	// var ptr = &val
	// fmt.Println(*ptr)

	// *ptr = *ptr + 10

	// fmt.Println(*ptr)

	var arr = [5]string{"sanjay", "Monika", "Ashutosh", "Sammer", "Kajal"}
	fmt.Println(len(arr))

}
