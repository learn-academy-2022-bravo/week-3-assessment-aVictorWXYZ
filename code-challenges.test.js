// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

//I'll write out a jest test ensuring the following 4 methods are in place
//describe,it,expect,toEqual
// describe will utilize the name  findFib
// it will explain what findFib should do
//expect will contain findFib holding the input 
//following the the expected input toEqual will hold the expected output

describe("findFib", () => {
    it("takes in a single number and utilizes that to create an array num1 long following the rules of fibonacci", () => {
        expect(findFib(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(findFib(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.
//create function called findFib that takes in any number and returns a Fibonacci sequence that number long
//using foundFibArray as a base so as to not require if statements to determin if the 0 placement is called place a 1 and the same for the 1 index.
//the for loop will start at 0 and if its less than the input number -2 then it continues to run
//the if statement checks if the input number is greater than 2 if false returns a message asking to input a number greater than 2
//the if statement returning a true will push the sum of  foundFibArray[iteration of the for loop] and foundFibArray[iteration of the for loop +1]
//in the case of a 3 being input then it will only iterate once as after the first iteration i will = 1 which isnt < 1 so it stops
//in the case of a 3 being input foundFibArray will only push 1 number which in this case will be a 2

const findFib = (inputNumber) => {
    let foundFibArray = [1, 1]
    for(let i = 0; i < inputNumber-2; i++){
        if(inputNumber > 2){
            foundFibArray.push(foundFibArray[i] + foundFibArray[i+1])
        }else {
            return "Please input a number greater than 2"
        }       
    }
    return foundFibArray
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

//I'll write out a jest test ensuring the following 4 methods are in place
//describe,,expect,toEqual
// describe will utilize the name  findFib
//describe onlyOddLtoG
//it takes an array uses filter to remove all non odd numbers and returns the new array
//expect    fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//toEqual fullArr1 = [-9, 7, 9, 199]

describe("onlyOddLtoG", () => {
    it("takes an array uses filter to remove all non odd numbers and returns the new array", () => {
        expect(onlyOddLtoG(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOddLtoG(fullArr2)).toEqual([-823, 7, 23])

    })
})

// a) Create a test with expect statements for each of the variables provided.



const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.
//the function onlyOddLtoG returns only odd numbers from lowest to greatest
//return is before the filter so that the filtered result is returned
//an if statement is done to find odd numbers and to remove non "number" type of inputs
// the array is filtered and .sort ensures that the numbers are properly placed in order from lowest to greatest



const onlyOddLtoG = (arr1Q2) => {
    return arr1Q2.filter(value => {
        if(value % 2 !== 0 && typeof(value) === "number"){
            return arr1Q2
        }
    }).sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

//I'll write out a jest test ensuring the following 4 methods are in place
//describe,,expect,toEqual
// describe will utilize the name 
//describe  :arraySum
//it        :will take in an array of numbers and return a new array that added all priori indexes
//expect    :numbersToAdd1 = [2, 4, 45, 9]
//toEqual   :[2, 6, 51, 60]

// a) Create a test with expect statements for each of the variables provided.

describe("arraySum", () => {
    it("will take in an array of numbers and return a new array that added all prior indexes", () => {
        expect(arraySum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(arraySum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(arraySum(numbersToAdd3)).toEqual([])
    })
})

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.


//arraySum takes in any numbers and returns a new array with the sum of each prior index
//holdTotal is used to hold the current total before runing the next index
// use the .map HOF so that if index is lower than 0 simply place value into current total sum
// else add total sum to value


const arraySum = (addthis) => {
    let holdTotal = ""
    return addthis.map((value, index) => {
        if(index > 0){
            return holdTotal = value + holdTotal
        }else {
            return holdTotal = value
        }
    }) 
}


// const arraySum = numbersToAdd1.map(value => {
//     let holding = 0
//     return holding = holding + value
// })

            //     let totalArray = []
            // for(let i = 0; i> sumArray.length; i++){
            //     let start = 0 
            //     let currentArray = start + sumArray[i]
            //     start = currentArray
            //     return totalArray.push(currentArray)
            // }
            // return totalArray


// const arraySum (sumArray) => {
//     let priorValue = ""
//     return sumArray.map(value => {
//         priorValue + value
//         priorValue = value
//     })
// })


// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total