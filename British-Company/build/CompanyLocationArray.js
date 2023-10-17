export class CompanyLocationArray {
    constructor() {
        this.personlist = [];
    }
    addPerson(person) {
        this.personlist.push(person);
    }
    getCount() {
        return this.personlist.length;
    }
    getPerson(index) {
        if (index < 0 || index > this.personlist.length) {
            throw new Error("There are no such many employees in your company");
        }
        return this.personlist[index];
    }
}
