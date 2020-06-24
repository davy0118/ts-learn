let add: (a: number, b: number) => number = function(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));

let myPrint: (v: string) => void = function(v: string) {
    console.log(v);
}

myPrint('davy');

let myAdd1 = function(a: number, b: number): number {
    return a + b;
}

let myAdd2: (a: number, b: number) => number = function(x, y) {
    return x + y;
}

// let myAdd3 = function(x, y) {
//     return x + y;
// }

function printName(firstName: string, secondName: string = 'Smith') {
    console.log(firstName, secondName);
}

printName('davy', 'chen');
printName('davy');
printName('davy', '');
printName('davy', null);
printName('davy', undefined);


function doNothing<T>(v: T): T {
    return v;
}

console.log(doNothing('astring'));
console.log(doNothing(10.01));


interface GeneraticTypeFn<T> {
    (v: T): T;
}

let gtype: GeneraticTypeFn<number> = doNothing;
// console.log(gtype('abc'))
console.log(gtype(100));

class GenericClas<T> {
    name: T;
    // property is a function
    print: (v: T) => T;
}

let gclass = new GenericClas<number>();
gclass.print = (v: number): number => v;

console.log(gclass.print(100.7));

function getProperty<T, K extends keyof T>(m: T, k: K) {
    return m[k];
}

console.log(getProperty({a: 1, b: 2}, 'a'));
// console.log(getProperty({a: 1, b: 2}, 'c'));

function createT<T>(t: {new (): T}): T {
    return new t();
}

// let x = 3;
// x = '3';

interface Named {
    name: string;
}

class Person {
    name: string;
}

let np:Named = new Person();

enum EventType {
    Mouse, 
    Keyboard
}

interface Event1 {
    timestamp: number;
}

interface MouseEvent1 extends Event1 {
    x: number; 
    y: number;
}

interface KeyboardEvent1 extends Event1 {
    keycode: number;
}

function listenEvent(eventType: EventType, handler: (event: Event1) => void) {
    // do nothing
}

listenEvent(EventType.Mouse, (e: MouseEvent1) => console.log(e.x + ', ' + e.y));
listenEvent(EventType.Mouse, (e: Event1) => console.log((e as MouseEvent1).x));


class Bird {
    fly() {
        console.log('fly');
    }
}

class Fish {
    swim() {
        console.log('swim');
    }
}

function getPet(): Fish | Bird {
    return new Bird();
}

let pet: Fish | Bird = getPet();

if((pet as Fish).swim) {
    (pet as Fish).swim();
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim != undefined;
}

if(isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}

if('swim' in pet) {
    pet.swim();
}
else {
    pet.fly();
}

let sn: string | null = 'rose';
sn = null;
sn = undefined;

function testTrimNullOrUndefined(name: string): string {
    return name!.charAt(0) + "." + 'davy';
}

console.log(testTrimNullOrUndefined('rose'));
// console.log(testTrimNullOrUndefined(null));
// console.log(testTrimNullOrUndefined(undefined));

type Tree<T> = {
    value: T;
    left?: Tree<T>;
    right?: Tree<T>;
}

let left = {value: 'left'};
let right = {value: 'right'};
let root: Tree<string> = {value: 'root', left: left, right: right};

type Pet2 = Fish;

declare function testNumberType(): 1 | 2;

let v = testNumberType();

// if(v !== 1 || v !== 2) {

// }

// if(v == 3) {
// }


class Calc1 {
    test1(): this {
        return this;
    }
}

class Calc2 extends Calc1 {
    test2(): this {
        return this;
    }
}

let calc2 = new Calc2().test1().test2();
// let calc1 = new Calc1().test1().test2();