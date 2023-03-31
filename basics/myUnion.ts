let score: number | string   = 100
score = "Kakashi"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string,
    tinNumber: number,
}

let somebody: User | Admin = {name: "WHO", id: 300}

somebody = {username: "Me", tinNumber: 222}

// function getDBId(id: number | string) {
//    console.log(`The id is ${id}`)
// }

getDBId(34)
getDBId("Kakashi")

function getDBId(id: number | string) {
    if(typeof id === "string") {
        id.toLowerCase()
    }
}

// array

const data: string[] | number[] = [1, 2, 3] //either all numbers or string not mixed
const data3: (string | number)[] = [1, "23", 45, 100] // mixed

let planeSeats: "crew" | "middle" | "window"
//planeSeats = "aisle"
