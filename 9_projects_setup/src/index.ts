class User{
    email:string;
    name:string;
    //#city it is from js 
    private readonly city:string = ""
    constructor(email:string,name:string){
        this.email = email;
        this.name = name

    }
}

const mehebub = new User("mehebub@gmail.com","mehebub")
// mehebub.city = "kolkata" this 

export{}