function getSearchProducts<T>(products: T[]): T{
    //db operation
    const myIndex = 3
    return products[myIndex]
}

const getMoreSeaech = <T>(products:T[]): T=>{
   //db operation 
   const myIndex =3
    return products[myIndex]
}

function anotherFunction<T,U>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}
anotherFunction(3,"4")

export{}