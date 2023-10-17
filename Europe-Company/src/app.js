"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company_1 = require("./Company");
var FrontEnd_1 = require("./FrontEnd");
var BackEnd_1 = require("./BackEnd");
var vamsi = new FrontEnd_1.FrontEnd("vamsi", "xstack_training");
var siddhu = new BackEnd_1.BackEnd("siddhu", "Backend_training");
var sreeja = new BackEnd_1.BackEnd("sreeja", "Amazon");
var shasank = new FrontEnd_1.FrontEnd("Shasank", "Google");
var lavanya = new FrontEnd_1.FrontEnd("lavanya", "Microsoft");
var company = new Company_1.Company([shasank, lavanya, sreeja, siddhu, vamsi]);
console.log("Employee names\n" + company.getNameList());
console.log("Employee projects\n" + company.getProjectList());
