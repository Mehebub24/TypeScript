const user ={
    name:"Mehebub",
    email:"mehebubkalapati@gmail.com",
    isAvtive:true
}

function creatUser({name:string,isPaid:boolean}){

}
creatUser({name:"mehebub",isPaid:true})

//one of madness of js which has in ts is 
let newUser = {name:"Mehebub",isPaid:false,email:"mehebubkalapati@gmail.com"}
creatUser(newUser)


function creatCourse ():{name:string ,prise:number}{
    return {name:"TS",prise:966}
}

type User = {
    readonly _id : string
    name: string 
    email:string
    isActive:boolean
    credcardDetails?: number 
}
let myUser: User ={
    _id :"4226",
    name: "mehebub",
    email:"mehebubkalapati@gmail.com",
    isActive:true
}

type cardDate = {
    cardnate:number
}
type cardNumber = {
    cardnumber:number
}

type credDetails = cardDate & cardNumber & {
    cvv: number
}


myUser.email = "mehebubkalapati014@gmail.com"

export{}