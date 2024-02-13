interface User {
    email:string,
    userId: number,
    googleId?: string,
    //startTrail:()=> string
    startTrail():string
    getCoupon?(couponname:string,off:number):number
}
//to add new property (reopening interface)
interface User {
    githubToken?:string
}

interface Admin extends User{
    role:"admin" | "ta" | "learner"
}


const hitesh :User = {email:"mehebub",userId:49,
startTrail:() =>{
    return"trail starter"
        },
    getCoupon:(name:"hitesh10",off:10)=>{
        return 10
    }
}

export{}