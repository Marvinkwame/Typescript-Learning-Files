function detectType(val: number | string) {
    if(typeof val === "string") {
        val.toUpperCase()
    }
}

function provideId(id: string | null) {
    if(!id) {
        console.log("Provide an id")
        return
    }
    id.toLowerCase()
}


//Narrowing
function printAll(strs: string | string[] | null) {
    if(strs) {
        if(typeof strs === "object") {
            for(const s of strs) {
                console.log(s)
            }
        } else if (typeof strs === "string") {
            console.log(strs)
        }
    }
}


//The in operator
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean,
    player: boolean
}


function isAdmin(account: User | Admin) {
    if("isAdmin" in account) {
        return account.isAdmin
    }
}

//instanceof narrowing

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird) {
    return (pet as Fish).swim !== undefined
}