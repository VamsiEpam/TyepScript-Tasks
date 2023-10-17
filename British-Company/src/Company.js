"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var Company = /** @class */ (function () {
    function Company(employeesList) {
        this.employeesList = employeesList;
    }
    Company.prototype.addEmployee = function (employee) {
        this.employeesList.push(employee);
    };
    Company.prototype.getProjectList = function () {
        var projectList = [];
        this.employeesList.forEach(function (employee) {
            projectList.push(employee.currentProject);
        });
        return projectList;
    };
    Company.prototype.getNameList = function () {
        var nameList = [];
        this.employeesList.forEach(function (employee) {
            nameList.push(employee.name);
        });
        return nameList;
    };
    return Company;
}());
exports.Company = Company;
