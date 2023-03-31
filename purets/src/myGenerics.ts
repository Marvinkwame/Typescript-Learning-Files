const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(3)

function identityFour<T>(val: T): T{ //Production level code
    return val
}

interface Bottle {
    brand: string,
    amount: number
}

//identityFour<Bottle>({}) should return an object

function myCode<Type>(arg: Type[]): Type {
    const myNum = 45-42
    return arg[myNum] 
}

//In Arrow functions
const getProducts = <T,>(products: T[]): T => {
    const index = 3
    return products[index]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function theFunction<T, M extends Database>(valueOne:T, valueTo:M):object {
    return {
        valueOne,
        valueTo
    }
}

//theFunction("e", {})

interface Quiz {
    name: string,
    type: string
}

interface course {
    title: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(products: T){
        
    }
}