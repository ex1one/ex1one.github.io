// function calculateAge (year) {
//     return 2020 - year
// }

// function logInfoAbout (name, year) {
//     const age = calculateAge(year)
    
//     if (age > 0) {
//         console.log (" Человек по имени " + " Сейчас имеет возраст " + age)
//     } else {
//         console.log( " Вообще-то это уже будущее! " )
//     }
// }

// logInfoAbout( " Владислав ", 1993 )
// logInfoAbout( " Елена", 1995 )
// logInfoAbout( " Елена ", 2022 )

// const cars = ["Мазда", "Мерседес", "Форд"]
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = "Porsche"
// cars[cars.length] = "Mazda"
// console.log(cars)

// const cars = ["Мазда", "Мерседес", "Форд"]

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// const person = {
//     firstName: "Vladelen",
//     lastName: "Minin",
//     year: 1993,
//     languages: ["Ru", "En", "De"],
//     hasWife: false,
//     greet: function() {
//         console.log("greet")
//     }
// }

// console.log(person.firstName)
// console.log(person["lastName"])
// const key = "year"
// console.log(person[key])
// person.greet()

// 1 Number

// const num = 42 //integer
// const float = 42.42 // float
// const pow = 10e3

// console.log( "MAX_SAFE_INTEGER", Number. MAX_SAFE_INTEGER)
// console.log( "Math.pow 53", Math.pow( 2, 53,) -1)
// console.log( "MIn_SAFE_INTEGER", Number.MIN_SAFE_INTEGER)
// console.log("Max_Value", Number.MAX_VALUE)
// console.log( "MIN_Value", Number.MIN_VALUE)
// console.log("Positive_infinity", Number.POSITIVE_INFINITY)
// console.log( "Negative_infinity", Number.NEGATIVE_INFINITY)
// console.log("2/0", 2/0)
// console.log(Number.NaN) // Not a Number
// console.log(typeof Nan)
// const weird = 2 / undefined
// console.log(isNaN(weird))

// const stringInt = "40"
// const stringFloat = "40.42"
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)

// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)


// console.log(0.4 + 0.2)
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt
// console.log(90071992547409919999n - 9007199254740991999n)
// console.log (-9007199254740991999n)
// console.log(9007199254740991999.23231n) //error

// console.log (10n-4) //error
// console.log(parseInt(10n) - 4) 
// console.log(10n-BigInt (4))
// console.log (5n / 2n) //2n

//3 Math
// console.log(Math.E)
// console.log(Math.PI)

// console.log(Math.pow(5, 3))
// console.log(Math.abs(42))
// console.log(Math.max(42, 12, 23, 11, 422))
// console.log(Math.min(42, 12, 23, 11, 422))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.9))
// console.log(Math.trunc(4.9))
// console.log(Math.random())

// 4 Example
// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(getRandomBetween(10,42))

// const name = "Vladilen"
// const age = 26

// // const output = " Привет, меня зовут " + name + " и мой возраст " + age + " Лет "
// const output = " Привет, меня зовут ${name}"
// console.log(output)

// const name = "Владилен"
// console.log(name.)


















