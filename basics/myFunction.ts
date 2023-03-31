function addNum(num: number): number {
    return num + 5
}

function attackOnTitan(main: string, place: "paradis" | "marlay" | "ninja town"): string {
    return  `So ${main} attack ${place}`
    
}

function theTyep(type) {
    return type === "admin"
}

theTyep("admin")

attackOnTitan("eren", "paradis")

function getUpper(word: string) {
    return `Oh word ${word}`

}

function signUp(name: string, email: string, isPaid: boolean) {

}

let loginUser = (email: string, username: string, isPaid: boolean = true) => {

}

/* function getVal(myVal: number): string {
    if(myVal > 2) {
        return true
    }

    return "200 okay"
}
*/

let getString = (s: string): string => { // returns a string
    return ""
}

function consoleError(msg: string): void { //is not going to return anything
    console.log(msg)
}

function handleError(msg: string): never { //never returns a value
    throw new Error(msg);
}

loginUser("Shishui@konohamail.com", "shishui")

signUp("Kakashi", "k@konohamail.com", true)

getUpper("Neymar")

addNum(10)


export { }