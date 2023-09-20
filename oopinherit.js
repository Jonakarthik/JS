// Task 1: Code a Person class
class person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
        
    }
}

// Task 2: Code a Worker class
class Worker extends person{
    constructor(name,age,energy,xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }

}
// Task 3: Code an intern object, run methods
function intern() {
    const n = new Worker("Bob", 21, 110, 0, 10);
    n.goToWork();
    return n;
}

// Task 4: Code a manager object, methods
function manager() {
    const m = new Worker("Alice", 30, 120, 100, 30);
    m.doSomethingFun();
    return m;
}

const internobj = intern();
const managerobj = manager();

console.log(internobj);
console.log(managerobj);