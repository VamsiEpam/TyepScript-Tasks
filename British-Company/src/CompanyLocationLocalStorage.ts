import {ILocation} from "./ILocation.js";
import {Employee} from "./Employee.js";

export class CompanyLocationLocalStorage implements ILocation{

    private storageKey : string = "";



    addPerson(person: Employee): void {
        const people = this.getPeopleFromLocalStorage();
        people.push(person);
        localStorage.setItem(this.storageKey, JSON.stringify(people));
    }

    getCount(): number {
        const people = this.getPeopleFromLocalStorage();
        return people.length;
    }

    getPerson(index: number): Employee {
        const peopleList = this.getPeopleFromLocalStorage();
        if(index <0  || index > peopleList.length)
        {
            throw new Error("There are no such many employees in your company")
        }
        return peopleList[index];
    }


    private getPeopleFromLocalStorage(): Employee[] {
        const storedData = localStorage.getItem(this.storageKey);
        return storedData ? JSON.parse(storedData) : [];
    }

}