import {Company} from "./Company.js";
import {Employee} from "./Employee.js";
import {CompanyLocationLocalStorage} from "./CompanyLocationLocalStorage.js";
import {CompanyLocationArray} from "./CompanyLocationArray.js";


const arrayLocation = new CompanyLocationArray();
const localStorageLocation = new CompanyLocationLocalStorage();


let vamsi : Employee = new Employee("vamsi","xstack_training")

let siddhu : Employee = new Employee("siddhu","Backend_training")

let sreeja : Employee = new Employee("sreeja","Amazon")

let shasank : Employee = new Employee("Shasank","Google")

let lavanya : Employee = new Employee("lavanya","Microsoft")

let hyderabadCompany : Company = new Company(arrayLocation)

let puneCompany : Company = new Company(localStorageLocation)



hyderabadCompany.addEmployee(vamsi)
hyderabadCompany.addEmployee(sreeja)
hyderabadCompany.addEmployee(lavanya)

puneCompany.addEmployee(siddhu)
puneCompany.addEmployee(shasank)


console.log("Employee names\n"+hyderabadCompany.getNameList())
console.log("Employee projects\n"+hyderabadCompany.getProjectList())

console.log("Employee names\n"+puneCompany.getNameList())
console.log("Employee projects\n"+puneCompany.getProjectList())