function addTwo(num:number):number{
    //num.toUpperCase() this is happens when ANY type
    return 2 + num
    //return "Mehebub"
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string,elmail:string,isPaid:boolean){

}
let loginUser = (name:string, elmail: string,isPaid = false) => {

}

loginUser("Mehebub","Mehebub@gmail.com")
getUpper("mehebub")
addTwo(4)



// function getValue(myNumbe:number){
//     if(myNumbe > 50){
//         return true
//     }
//     return"600 is OK"
// }
const getHello = (s:string):string => {
    return "Hello"
}

//const names = ["Mehebub","kalapati","lima"]
const names = [1,2,3]


names.map((name :number)=>{   
    return `hero is ${name}`
})

function consoleError (errmsg:string):void{
    console.log(errmsg);
    
}


function handleError(errmsg:string):never{
    throw new Error(errmsg);
    
}


export{}