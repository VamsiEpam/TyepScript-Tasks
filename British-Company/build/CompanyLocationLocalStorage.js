export class CompanyLocationLocalStorage {
    constructor() {
        this.storageKey = "";
    }
    addPerson(person) {
        const people = this.getPeopleFromLocalStorage();
        people.push(person);
        localStorage.setItem(this.storageKey, JSON.stringify(people));
    }
    getCount() {
        const people = this.getPeopleFromLocalStorage();
        return people.length;
    }
    getPerson(index) {
        const peopleList = this.getPeopleFromLocalStorage();
        if (index < 0 || index > peopleList.length) {
            throw new Error("There are no such many employees in your company");
        }
        return peopleList[index];
    }
    getPeopleFromLocalStorage() {
        const storedData = localStorage.getItem(this.storageKey);
        return storedData ? JSON.parse(storedData) : [];
    }
}
