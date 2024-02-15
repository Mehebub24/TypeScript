"use strict";
// class User{
//     email:string;
//     name:string;
//     //#city it is from js 
//     private readonly city:string = ""
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name
Object.defineProperty(exports, "__esModule", { value: true });
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    get getAllpeEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
}
const mehebub = new User("mehebub@gmail.com", "mehebub");
