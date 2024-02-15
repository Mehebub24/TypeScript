"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var emloy = /** @class */ (function () {
    function emloy(experience, position, salary) {
        this.experience = experience;
        this.position = position;
        this.salary = salary;
    }
    emloy.prototype.get_Current_Project_Topic = function () {
        //call that project head
        return "that topic";
    };
    return emloy;
}());
//const mehebub = new  emloy(2,"SDE",60000)
var newProjectmember = /** @class */ (function (_super) {
    __extends(newProjectmember, _super);
    function newProjectmember(experience, position, salary, Consisten) {
        var _this = _super.call(this, experience, position, salary) || this;
        _this.experience = experience;
        _this.position = position;
        _this.salary = salary;
        _this.Consisten = Consisten;
        return _this;
    }
    newProjectmember.prototype.getCurrentProject = function () {
        //call project maneger
        return "that project name";
    };
    return newProjectmember;
}(emloy));
console.log(newProjectmember);
var mehebub = new newProjectmember(2, "SDE", 60000, true);
console.log(mehebub.getCurrentProject());
