import { Company } from "./Company.js";
import { Employee } from "./Employee.js";
import { CompanyLocationLocalStorage } from "./CompanyLocationLocalStorage.js";
import { CompanyLocationArray } from "./CompanyLocationArray.js";
const arrayLocation = new CompanyLocationArray();
const localStorageLocation = new CompanyLocationLocalStorage();
let vamsi = new Employee("vamsi", "xstack_training");
let siddhu = new Employee("siddhu", "Backend_training");
let sreeja = new Employee("sreeja", "Amazon");
let shasank = new Employee("Shasank", "Google");
let lavanya = new Employee("lavanya", "Microsoft");
let hyderabadCompany = new Company(arrayLocation);
let puneCompany = new Company(localStorageLocation);
hyderabadCompany.addEmployee(vamsi);
hyderabadCompany.addEmployee(sreeja);
hyderabadCompany.addEmployee(lavanya);
puneCompany.addEmployee(siddhu);
puneCompany.addEmployee(shasank);
console.log("Employee names\n" + hyderabadCompany.getNameList());
console.log("Employee projects\n" + hyderabadCompany.getProjectList());
console.log("Employee names\n" + puneCompany.getNameList());
console.log("Employee projects\n" + puneCompany.getProjectList());
