// class User{
//     email:string;
//     name:string;
//     //#city it is from js 
//     private readonly city:string = ""
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name

//     }
// }
class User {

    protected _courseCount = 1
    //private _courseCount = 1
    readonly city: string = "Jaipur"
    constructor(
        public email: string,
        public name:string
    ){ 
        
    }
    get getAllpeEmail():string{
        return`apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }
}

class SubUser extends User{
    isFamily:boolean = true 
    changeCourseCount(){
        this._courseCount =4
    }
}


const mehebub = new User("mehebub@gmail.com","mehebub")
// mehebub.city = "kolkata" this   

export{}