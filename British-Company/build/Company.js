export class Company {
    constructor(location) {
        this.employeesList = [];
        this.location = location;
    }
    addEmployee(employee) {
        this.employeesList.push(employee);
        this.location.addPerson(employee);
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
