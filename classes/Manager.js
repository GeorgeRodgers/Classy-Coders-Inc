const {Employee} = require(`./Employee`)

class Manager extends Employee{
    #employeesManaged
    constructor(name, position, salary, department){
        super(name, position, salary);
        this.#employeesManaged = [];
        this.department = department;
    }
    getEmployeesManaged(){
        return this.#employeesManaged;
    }
    setEmployeesManaged(employee){
        this.#employeesManaged.push(employee);
    }
    promote(newJobTitle = this.position, newSalary = this.getSalary(), newDepartment = this.department){
        this.position = newJobTitle;
        this.setSalary(newSalary);
        this.department = newDepartment;
    }
}

module.exports = {
    Manager,
}