import {Employee} from "./Employee.js";
import {ILocation} from "./ILocation.js";

export class Company{
    employeesList : Employee[]

    location : ILocation

    constructor(location : ILocation) {
        this.employeesList = [];
        this.location = location;
    }

    addEmployee(employee : Employee){
        this.employeesList.push(employee)
        this.location.addPerson(employee)
    }


    getProjectList(): string[]{
        let projectList : string[] = [];
        this.employeesList.forEach(
           employee=> {
               projectList.push(employee.currentProject)
           }
        )
        return projectList;
    }

    getNameList() : string[]{
        let nameList : string[] = [];
        this.employeesList.forEach(employee => {
            nameList.push(employee.name)
        })
        return nameList
    }
}