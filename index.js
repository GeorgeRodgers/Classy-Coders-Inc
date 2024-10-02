const { Employee } = require("./classes/Employee")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here

const preston = new Employee("Preston", "Engineer", 100000)
const jenna = new Manager("Jenna", "Head of Engineers", 120000, "Software Engineering", 10)
const programmer = new SoftwareEngineer("Becca", "Senior Software Engineer", 100000, ["JavaScript", "Java", "Python"]);
const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, ["Vine", "MySpace", "Shutterfly"])

console.log(preston)
console.log(preston.getSalary())

preston.promote(`Lead Engineer`, 110000)

console.log(preston)
console.log(preston.getSalary())




module.exports = {
    Employee,
    Manager,
    SalesPerson,
    SoftwareEngineer
}
