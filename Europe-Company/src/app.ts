import {Company} from "./Company.js";
import {FrontEnd} from "./FrontEnd.js";
import {BackEnd} from "./BackEnd.js";



let vamsi : FrontEnd = new FrontEnd("vamsi","xstack_training")

let siddhu : BackEnd = new BackEnd("siddhu","Backend_training")

let sreeja : BackEnd = new BackEnd("sreeja","Amazon")

let shasank : FrontEnd = new FrontEnd("Shasank","Google")

let lavanya : FrontEnd = new FrontEnd("lavanya","Microsoft")

let company : Company = new Company([shasank,lavanya,sreeja,siddhu,vamsi])

console.log("Employee names\n"+company.getNameList())

console.log("Employee projects\n"+company.getProjectList())