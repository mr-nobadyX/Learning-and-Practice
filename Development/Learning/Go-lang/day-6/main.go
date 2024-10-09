package main

import (
	"fmt"
	// "math/rand"
	// "time"
)

type User struct {
	Name      string
	userEmail string
	age       int
}

// Normal greet func
func greet() {
	fmt.Println("Namaste from Go!")
}

// Function with Args
func opreation(valueOne int, ValueTwo int) int {
	return valueOne + ValueTwo*2
}

// function acceptin the multiple and may uncountble values basically a slices
func opert(val ...int) (int, string) {
	total := 0

	for _, nums := range val {
		total += nums
	}

	return total, "This is a multiple return funx"
}

func main() {
	defer fmt.Println("I m the first, but i need to be print first")
	fmt.Println("Namaste Day-6, if-else, switch, loops, functions, methods and defer ")
	fmt.Println("")
	defer deferFnx()

	// var nums int = 11
	// if nums%2 == 0 {
	// 	fmt.Println("Even")
	// } else if nums == 11 {
	// 	fmt.Println("11")
	// } else {
	// 	fmt.Println("Odd")
	// }

	// can declare a varible at the condtion place
	// if nums := 21; nums%2 == 1 {
	// 	fmt.Println(" 1remaing")
	// } else {
	// 	fmt.Println(" 2remaing")
	// }

	// switch Statement in Go
	// rand.Seed(time.Now().UnixNano()) // Seed the random number generator
	// diceNum := rand.Intn(6) + 1      // Generate a random number between 1 and 6

	// switch diceNum {
	// case 1:
	// 	fmt.Println("1")
	// case 2:
	// 	fmt.Println("2")
	// 	fallthrough
	// case 3:
	// 	fmt.Println("3")
	// case 4:
	// 	fmt.Println("4")
	// 	fallthrough
	// case 5:
	// 	fmt.Println("5")
	// case 6:
	// 	fmt.Println("6")
	// default:
	// 	fmt.Println("default, what have you entered bro :/")
	// }

	// sunjects := []string{"DSA", "Development", "CS fundamentals", "SoftSkills"}

	// for i := range sunjects {
	// 	fmt.Println(sunjects[i])
	// }

	// for each kind of loop, like value with theire idx accosiated
	// for idx, sub := range sunjects {
	// 	// fmt.Println("Subject idex is %v and value is %v\n", idx, sub)
	// }

	// also break, continue and goto key is there

	// ======= function ====== \\

	// in GO u can't make a func inside a func, so since we in main func we need to go outerside this func
	// greet()

	// fmt.Println(opreation(10, 20))

	// fmt.Println(opert(10, 20, 30))

	// Methods
	// sanjay := User{"sanjay", "sanjayKushwaha@gmail.com", 20}
	// fmt.Println(sanjay)

	// method calling
	// method calling
	// sanjay.writeAge()

	// fmt.Println(sanjay)

}

func deferFnx() {
	fmt.Println("Im a fnx")
}

// Methods
func (u User) getName() {
	fmt.Println(u.userEmail)
}

// write the age
func (u User) writeAge() {
	u.age = 19
	fmt.Println(u.age)
}
