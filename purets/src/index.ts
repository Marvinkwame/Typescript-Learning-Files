//class User {
//    // make sure it knows before
//    public email: string
//    name: string
//    private readonly city: string = "Kuala Lampur" //The private keyword makes sure its not accessible
//    constructor(email: string, name: string) {
//        this.email = email;
//        this.name = name
//    }
// }

class User {
    protected _courseCount = 1 // can be accessed within the class and the class which inherits this class

    readonly city: string = "Kuala Lampur" //The private keyword makes sure its not accessible
    constructor(
        public email: string, 
        public name: string, 
        // private userId: number
        ) {
    }
    private deleteToken()  { // A private method
        console.log("Deleted")
    }

    //Getter
    get getPlayerEmail(): string {
        return `dame's email's ${this.email}`
    }

    // Getter
    get courseCount(): number {
        return this._courseCount
    }

    // Setter
    set courseCount(theNum) { //A setter does not have a return type annotation
        if(theNum < 1) {
            throw new Error("You are not a subscriber")
        }

        this._courseCount = theNum
    }
}

class SubUser extends User { //cannot acquire the private property
    isFamily: boolean = true // new property
    changeCourse() {
        this._courseCount = 10
    }
}

const me = new User("nn@mail.com", "dhdhd") //Creating an obbject from the User class
//me.city 


//me.deleteToken() can only be accessible within the class 

function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
                          
    }
    return padding + input;
             
  }