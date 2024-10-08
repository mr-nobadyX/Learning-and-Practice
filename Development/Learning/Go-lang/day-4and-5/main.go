package main

import (
	"fmt"
	"sort"
)

// **Structs**
// Notes:= no inheritance in go, eg no super or parent class or child or base class
// 1. Structs are value types, not reference types
// 2. Structs can have methods, just like classes in other languages
// 3. Structs can have fields of any type, including other structs

type User struct {
	// fields
	Name    string
	Email   string
	Status  bool
	Age     int
	PhoneNo int
}

func main() {
	// fmt.Println("Namaste day-4and-5, Slices, Map, Structs")

	var cars = []string{"Valvo", "Shift", "Thar"}
	// fmt.Printf("Check DataType: %T \n", cars) // Proper format specifier usage

	// add values to the Slices through append
	cars = append(cars, "Tigor")

	// Taking a slice of the Slices
	cars = cars[:3] // Slice cars from index 1 to 3 (not inclusive of 3)
	// fmt.Println(cars)

	// using the make()method create a slice
	highSpeed := make([]int, 2)
	highSpeed[0] = 90
	highSpeed[1] = 120

	highSpeed = append(highSpeed, 192, 230, 43, 32, 12)

	// sort.Ints(highSpeed)
	sort.Ints(highSpeed)
	// fmt.Println(sort.IntsAreSorted(highSpeed))

	// How to delete ele slice from slices based out in index
	var subjects = []string{"DSA", "Development", "Ai-development", "CS-Fundamentals", "SoftSkilss"}
	var index = 4

	// concatination means ) "0 to index -1" + "index + 1 to till end"
	subjects = append(subjects[:index], subjects[index+1:]...) // ... Object deStruturing means wrapping multiple arrgumsnets in singleOnes
	// fmt.Println(subjects)

	// Maps in Go, unique key and value pair
	// var student = make(map[string]int)
	// student["sanjay"] = 20
	// student["Ranjay"] = 18

	var fruitsCount = map[string]int{"apple": 5, "orange": 10}

	// fmt.Println(fruitsCount)

	// Delete Opreation
	delete(fruitsCount, "orange")
	// fmt.Println("Orange Deleted", fruitsCount)

	// **Structs**
	// Notes:= no inheritance in go, eg no super or parent class or child or base class

	sanjay := User{
		Name:    "Sanjay Kushwaha",
		Email:   "sanjayLKulsha@gmail.com",
		Status:  true,
		Age:     20,
		PhoneNo: 636108392,
	}

	fmt.Printf("more details in organize way %+v\n", sanjay)

}
