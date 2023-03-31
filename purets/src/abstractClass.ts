abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSheila(): void
    getNbaOdd(): number {
        return 41
    }
    getNumber(): boolean {
        return true
    }
}

//No new object can be created from the abstract class when you put the abstract keyword


//inherting the abstract class
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
        }

        getSheila(): void {
            console.log("Sheila")
        }
}

const anette: TakePhoto = new Instagram("me", "me", 10) 
// Create object from the class inheriting the abstarct class