// const AISLE = 0
// const MIDDEL = 1
// const WINDOW = 2
// let seat
// if (seat === 0){
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDEL"] = 0] = "MIDDEL";
    SeatChoice[SeatChoice["WINDOW"] = 1] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 1] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
var bcSeat = SeatChoice.WINDOW;
