export class Company {
    constructor(employeesList) {
        this.employeesList = employeesList;
    }
    addEmployee(employee) {
        this.employeesList.push(employee);
    }
    getProjectList() {
        let projectList = [];
        this.employeesList.forEach(employee => {
            projectList.push(employee.currentProject);
        });
        return projectList;
    }
    getNameList() {
        let nameList = [];
        this.employeesList.forEach(employee => {
            nameList.push(employee.name);
        });
        return nameList;
    }
}
