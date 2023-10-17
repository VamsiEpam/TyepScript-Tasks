import {Employee} from "./Employee.js";

export class BackEnd extends Employee{

    constructor(name: string, currentProject: string) {
        super(name, currentProject);
    }
}