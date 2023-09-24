class Human {
    constructor() {
        if (this.constructor == Human) {
            throw new Error('it is abstract class')
        } 
    }
    eat(){console.log('eating')}
    listen() { console.log('listening') }
};

class Worker extends Human {

    constructor(salary, workTime) {
        super();
        this.salary = salary;
        this.workTime = workTime;
    }

    getSalary() {
        return this.salary;
    }

    getWorkTime() {
        return this.workTime;
    }

    sayHello(word) {
        console.log('Hello');
    }

    sayWorkDone() {
        console.log('Work is done');
    }

    setIsWorking(hour) {
        if (hour >= 9 && hour <= 17) {
           console.log('Worker is working now');
        } else if (hour <= 8 || hour >= 18) {
           console.log('Worker is not working now');
        } else {
            console.log('Incorrect hour format');
        }

    }
};

const date = new Date();
let hourNow = date.setHours(5);
let worker1 = new Worker(600, 7);
let isWorking = worker1.setIsWorking(hourNow);

console.log("Salary: " + worker1.getSalary() + ', ' + "Work time: " + worker1.getWorkTime());




