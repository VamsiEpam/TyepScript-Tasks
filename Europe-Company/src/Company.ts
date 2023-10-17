import {Employee} from "./Employee.js";

export class Company{
    employeesList : Employee[]


    constructor(employeesList: Employee[]) {
        this.employeesList = employeesList;
    }

    addEmployee(employee : Employee){
        this.employeesList.push(employee)
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