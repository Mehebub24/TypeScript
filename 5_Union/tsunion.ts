let score:number |string| boolean = 33

score ="55"
score = 44 


type User = {
    name:string;
    id:number
}

type Admin = {
    username:string;
    id:number
}

let mehebub: User| Admin = {name:"mehebub",id:50}

mehebub = {username:"hc",id:655}

function getDbId(id:number|string){
    //making some API calls 
    console.log(`DB id is:${id}`);

    if (typeof id === "string"){
        id.toLocaleLowerCase()
    }
    
}

getDbId(2)
getDbId("3")


//array
const data: number[] = [1,2,3]
const data1: string [] = ["1","2","3"]

const data3 :number[]| string[] = ["1","2","3"]


let seatAllotment: "aisle" | "midle"| "window"

//seatAllotment = "crew"
seatAllotment = "aisle"