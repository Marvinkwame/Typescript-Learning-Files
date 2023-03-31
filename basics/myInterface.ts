interface myUser {
    readonly dbid: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

//Re-opening of the interface
interface myUser {
    gitToken: string
}

//Inheritance using the extends keyword
interface Adminis extends myUser {
    role: "ta" | "admin" | "learner"
}

const me: Adminis = { dbid: 90, email: "", userId: 34, 
gitToken: "git",
role: "ta",
startTrail: () =>  {
    return "jose alvarado"
},
getCoupon: (name: "Messi", number: 10) => {
    return 700
}
}
me.email = "hn@gmail.com"

let martinez = "defender"
martinez;

interface Siuuu {
    name: string
    jersey: number
}

function sentence(quote: Siuuu | "nnnn") {
    return `My ${quote}`
}

const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}