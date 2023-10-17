export class Employee{
    private _name : string

    private _currentProject : string


    constructor(name: string, currentProject: string) {
        this._name = name;
        this._currentProject = currentProject;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get currentProject(): string {
        return this._currentProject;
    }

    set currentProject(value: string) {
        this._currentProject = value;
    }
}