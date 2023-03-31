"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Kuala Lampur"; //The private keyword makes sure its not accessible
    }
    deleteToken() {
        console.log("Deleted");
    }
    //Getter
    get getPlayerEmail() {
        return `dame's email's ${this.email}`;
    }
    // Getter
    get courseCount() {
        return this._courseCount;
    }
    // Setter
    set courseCount(theNum) {
        if (theNum < 1) {
            throw new Error("You are not a subscriber");
        }
        this._courseCount = theNum;
    }
}
const me = new User("nn@mail.com", "dhdhd");
//me.city 


