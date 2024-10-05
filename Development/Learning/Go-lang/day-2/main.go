package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

const FixedForAll = -10

func main() {
	// ======== PART 1 ========
	// String
	// %T \n placeHolder or method for concetination
	var userName string = "Sanjay Kushwaha"
	fmt.Println(userName)
	fmt.Printf("Data type is: %T \n", userName)

	// Boolean
	var isSignIn bool = true
	fmt.Println(isSignIn)
	fmt.Printf("Data type is: %T \n", isSignIn)

	// small values
	var smallVal uint8 = 255
	fmt.Println(smallVal)
	fmt.Printf("Data type is: %T \n", smallVal)

	// small values
	var smallFloat float32 = 255.782
	fmt.Println(smallFloat)
	fmt.Printf("Data type is: %T \n", smallFloat)

	// Defalut-value
	var nums uint
	fmt.Println(nums)
	fmt.Printf("Data type is: %T \n", nums)

	// aliases - no need to write the dataType
	var val = 10
	fmt.Println(val)
	fmt.Printf("Data type is: %T \n", val)

	// aliases - no var keyword
	// := valorous opretors, only can be used in methods
	points := 20
	fmt.Println(points)
	fmt.Printf("Data type is: %T \n", points)

	// Public keywords accesing
	fmt.Println(FixedForAll)
	fmt.Printf("Data type is: %T \n", FixedForAll)

	//  ======== PART 2 ========
	// TAKING INPUTS FROM USER USING COMMA OK OR ERR SYSNTEX AND PACKAGE

	readValue := bufio.NewReader(os.Stdin) // taking input from here
	fmt.Println("Please rate us on our services: ")

	// comma ok || err syntex

	input, _ := readValue.ReadString('\n')
	fmt.Printf("Data type is: %T \n", input)

	// now we want to add by 1 to the input which we recive from user
	// converting from string to float and cutting space also
	numRating, err := strconv.ParseFloat(strings.TrimSpace(input), 64)

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("added 1 to your rating: ", numRating+1)
	}

}
