abstract class employee {
    constructor(
        public experience:number,
        public position:string, 
        public salary:number
    ){}
    abstract getCurrentProject():string
    get_Current_Project_Topic():string{
        //call that project head
        return "that topic"
    }


}

//const mehebub = new  employee(2,"SDE",60000)
class newProjectmember extends employee{
    constructor(
        public experience:number,
        public position:string, 
        public salary:number,
        public Consisten:boolean
    ){
        super(experience,position,salary)
    }
    getCurrentProject(): string{
        //call project maneger
        return "that project name"
      }
}

const mehebub = new newProjectmember(2,"SDE",60000,true)


export{}







