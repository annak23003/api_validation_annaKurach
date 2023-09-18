class User {
    _arns = 2;
    fingers = 10;

    constructor(name, legs, arns, fingers) {
        this.name = name;
        this.#legs = legs;
        this.arns = arns;
        this.fingers = fingers;
    }
    static planet = 'Earth';
    #legs = 2;

    sayHello() {
        console.log('Hello');
    }
    getName() {
        return this.name;
    }
    setName(val) {
        if (val.length < 5 && typeof(val) == 'string') {
            this.name = val;
        } else {
            console.log('Please fill only letters');
        }
    }
};

let userD = new User('Birdss');
let nnn = userD.getName;
console.log(nnn);
console.log(User.planet);
// userD.legs = 5;
// console.log(UserD.legs);

let userD2 = new User(433);
let nnn2 = userD2.getName;
console.log(nnn2);


// let userN = new User();
// console.log(userN.arns); 


class Student extends User {
    mark = 5;
    speak() {
        console.log('Yes, I know answer')
    };
}

class SchoolStudent extends Student {
    speak() {
        super.speak()
        console.log("My answer very short")
    };
}

let student1 = new Student("jenkins", 2, 2);
student1.speak();
console.log(student1.getName())

let student2 = new SchoolStudent("travis", 2, 2);
student2.speak();

let student3 = new SchoolStudent("mimimi", 2, 2, 9);
console.log(student3.fingers);
student3.fingers = 4;
console.log(student3.fingers);