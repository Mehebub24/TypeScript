const socore:Array<number> =[]
const names:Array<string>= []


function identityOne(val:boolean|number):boolean|number{
    return val
}

function identityTwo(val:any):any{
    return val
}


function identityThere<Type>(val:Type): Type{
    return val
}



function identityFour<T>(val:T):T{
    return val
}

interface Laptop{
    ram:number,
    brand:string
}

identityFour<Laptop>