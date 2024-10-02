class Employee {
    static #allEmployees = [];
    #salary
    #isHired
    constructor(name, position, salary){
        Employee.#allEmployees.push(this);
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
    }
    getSalary(){
        return this.#salary;
    }
    setSalary(amount){
        if (amount < 0){
            console.error(`Salary cannot be negative`);
        } else {
            this.#salary = amount;
        }
    }
    getStatus(){
        return this.#isHired;
    }
    setStatus(command){
        if (command === `hire`){
            this.#isHired = true;
        } else if (command === `fire`){
            this.#isHired = false;
        }
    }
    promote(newJobTitle = this.position, newSalary = this.getSalary()){
        this.position = newJobTitle;
        this.#salary = newSalary;
    }
    static getEmployees(){
        return Employee.#allEmployees;
    }
    static getTotalPayroll(){
        let totalPayroll = 0;
        for (let i = 0; i < Employee.#allEmployees.length; i++){
            totalPayroll += Employee.#allEmployees[i].getSalary();
        }
        return totalPayroll;
    }
}

module.exports = {
    Employee,
}
