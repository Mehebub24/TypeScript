interface TackPhoto{
    camera:string;
    filter:string;
    burst:number;
}

interface Story{
    createStory():void
}

class Instagram implements TackPhoto{
    constructor (
        public camera:string,
        public filter:string,
        public burst: number
    ) {
        
    }


}

class Youtube implements TackPhoto{
    constructor (
        public camera:string,
        public filter:string,
        public burst: number,
        public short: string
    ){}

    createStory():void{
        console.log("Story was created");
        
    }
}