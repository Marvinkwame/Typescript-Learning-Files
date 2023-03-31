//const user = {
//    name: "me",
//    email: "m@.COM",
//    isActive: true
//}

//function createUser({ name: string, isActive: boolean}) {}

//let newUser = {name: "Neymar", isActive: true, email: "me@gmail.com"}

//createUser(newUser)

//function createCourse():{name: string, isActive: boolean} {
//    return { name: "Neymar", isActive: true}
// }

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string, // cannot be manipulated cos of the readonly keyword
    name: string,
    email: string,
    isActive: boolean,
    phoneNumber? : number //optional details
}

let theUser: User = {
    _id: "1234",
    name: "Kakashi",
    email: 'mona4real@gmail',
    isActive: true
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardInfo = cardNumber & cardDate & {
    cvv: number
}

theUser.email = "m@gmail.com"
//theUser._id = "jjj"


export {}