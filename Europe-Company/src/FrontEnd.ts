import {Employee} from "./Employee.js";

export class FrontEnd extends Employee{


    constructor(name: string, currentProject: string) {
        super(name, currentProject);
    }
}