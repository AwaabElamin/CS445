/**
 * Implement the Decorator pattern to add a logger to any object (add behavior). 
 * A logger method will log a message to the console.
 */
class Employee {
    constructor(empId,shiftNo, department) {
        this.empId = empId;
        this.shiftNo = shiftNo;
        this.department = department;
    }
}
class Manager {

    constructor(employee,accessKeyNo, platNo) {
        // this.employee = employee;
        this.empId = employee.empId; 
        this.shiftNo = employee.shiftNo;
        this.department = employee.department;
        this.accessKeyNo = accessKeyNo;
        this.platNo = platNo;
    }
    logger() {
        console.log("Manager (decorate employee): " + this.empId + ", " +
            this.shiftNo + ", " + this.department 
            + ", " + this.accessKeyNo + ", " + this.platNo );
    };
}
const employee = new Employee(10495604, 2, 'packing');

const manager = new Manager(employee, 'Elgailani@2021', 'GDP173');
manager.logger();