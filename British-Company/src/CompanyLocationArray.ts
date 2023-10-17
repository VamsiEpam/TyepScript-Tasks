import {ILocation} from "./ILocation.js";
import {Employee} from "./Employee.js";

export class CompanyLocationArray implements ILocation{
    private personlist: Employee[] = []

    addPerson(person: Employee): void {
        this.personlist.push(person)
    }

    getCount(): number {
        return this.personlist.length
    }

    getPerson(index: number): Employee {
        if(index <0  || index > this.personlist.length)
        {
            throw new Error("There are no such many employees in your company")
        }
        return this.personlist[index]
    }

}