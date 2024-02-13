var score = 33;
score = "55";
score = 44;
var mehebub = { name: "mehebub", id: 50 };
mehebub = { username: "hc", id: 655 };
function getDbId(id) {
    //making some API calls 
    console.log("DB id is:".concat(id));
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
}
getDbId(2);
getDbId("3");
//array
var data = [1, 2, 3];
var data1 = ["1", "2", "3"];
var data3 = ["1", "2", "3"];
var seatAllotment;
//seatAllotment = "crew"
seatAllotment = "aisle";
