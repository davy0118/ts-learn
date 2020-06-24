function printLabel(labelObj: {name: string}): void {
    console.log(labelObj.name, labelObj);
}

let myObj = {name: 'rose', age: 36};
// printLabel({name: 'rose', age: 36});
printLabel(myObj);


interface LabelObj {
    label: string;
}

function printLabelObj(labelObj: LabelObj): void {
    console.log(labelObj.label, labelObj);
}

let labelObj = {label: "circle", r: 15};
printLabelObj(labelObj);
printLabelObj({label: "circle"});

interface Shape {
    color?: string;
    readonly width?: number;
    [propName: string]: any;
}

function printShape(shape: Shape): void {
    if(shape.color) {
        console.log('color: ', shape.color);
    }

    if(shape.width) {
        console.log('width: ', shape.width);
    }

    console.log(shape);
}

let shape1 = {color: 'red', width: 0};
shape1.width = 100;
console.log('----------shape1:');
printShape(shape1);

let shape2 = {color: '', width: 10};
console.log('----------shape2:');
printShape(shape2);

printShape({color: 'blue'});
printShape({width: 14});

printShape({color: 'blue', r: 5} as Shape);

printShape({color: 'blue', r: 5});

let a: number[] = [1, 2, 3, 4]
let ra: ReadonlyArray<number> = a;
// ra[0] = 12;
// ra.push(5);
// ra.length = 100;
// a = ra;
a = ra as number[];
a[0] = 10;
console.log(a);


interface SearchFunc {
    (source: string, target: string): boolean;
}

let alwaysNotFound: SearchFunc;
alwaysNotFound = function(source: string, target: string): boolean {
    return false;
}

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ['a', 'b'];
console.log(myArray[0]);


interface IClock {

}

interface ClockConstructor {
    new (hour: number, minute: number): IClock;
}

class DisitalClock implements IClock {
    hour: number;
    minute: number;

    constructor(h: number, m: number) {
        this.hour = h;
        this.minute = m;
    }
}

function clock(ctr: ClockConstructor, h: number, m:number): IClock {
    return new ctr(h, m);
}

clock(DisitalClock, 3, 14);


class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(steps: number = 1): void {
        console.log(`Animal ${this.name} moved ${steps} steps.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(steps: number = 4): void {
        console.log("Dogs move");
        super.move(steps);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(steps: number = 5): void {
        console.log("Snake move");
        super.move(steps);
    }
}

let dog = new Dog("rose");
let snake: Animal = new Snake("sofia");
dog.move();
snake.move();
// console.log(dog.name);

class Flyer {
    private name: string;

    constructor(name: string, public legs: number) {
        this.name = name;
    }

    move(steps: number = 1): void {
        console.log(`Flyer ${this.name} moved ${steps} steps.`);
    }
}

let animal = new Animal('hoho');
let fly = new Flyer('haha', 4);
// animal = fly;
console.log(animal.move());
console.log(fly.legs);

class Person {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(_fullName: string) {
        this._fullName = _fullName;
    }
}

let rose = new Person();
rose.fullName = 'rose';
console.log(rose.fullName, rose);

class Grid {
    static origin = {x: 0, y: 0};
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public distince(): number {
        return Math.sqrt((this.x - Grid.origin.x) * (this.x - Grid.origin.x) + (this.y - Grid.origin.y) * (this.y - Grid.origin.y));
    }
}

let grid = new Grid(3, 4);
grid.distince();

let typeOfGrid = Grid;
console.log(new typeOfGrid(3, 4).distince());

interface ITest {
    name: string;
}

// let itest = new ITest();