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

export{}