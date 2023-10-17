export class Employee {
    constructor(name, currentProject) {
        this._name = name;
        this._currentProject = currentProject;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get currentProject() {
        return this._currentProject;
    }
    set currentProject(value) {
        this._currentProject = value;
    }
}
