class Human {
    KIND = 'HUMAN';

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log('Name', this.name);
    }

    sayAge() {
        console.log('Age', this.age);
    }

    sayKind = () => {
        console.log('kind', this.KIND);
    }
}

const gendalf = new Human('Gendalf', 666);

gendalf.sayAge();

export const a = 1;
export const b = 5;
const c = a + b;
console.log(c);

