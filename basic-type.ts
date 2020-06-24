let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xfff;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = 'red';
color = 'blue';

let age = 34;
let say = `My name is davy, I'm ${ age } old.`;

let loves: string[] = ['rose', 'sofia', 'sara'];
let loves2: Array<string> = ['rose', 'sofia', 'sara'];

let tuple: [string, number] = ['rose', 36];
console.log(tuple[0], tuple[1]);

let tuple3: [string, number, string] = ['rose', 36, 'davy'];

enum Color {Red, Green = 3, Blue}
let c: Color = Color.Red;
console.log(c, Color.Red, Color.Green, Color.Blue);
console.log(Color.Green == 1)
console.log(Color[4])

let notSure: any = 4;
// notSure.ifItExists();
notSure.toFixed();

let asObject: Object = 4;
// asObject.ifItExists();
// asObject.toFixed();

let aany: any = 'this is string';
console.log((<string> aany).length);
console.log((aany as string).length);


function f() {
    let x = 1;

    if(true) {
        let x = 100;
    }

    return x;
}

console.log('f: ', f());

for(let i = 0; i < 10; i++) {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
}


let arr: Array<string> = ["a", "b", "c"];
let [a, b] = arr;
console.log(a, b);
[a, b] = [b, a]
console.log(a, b)

let [a1, ...b1] = arr;
console.log(a1, b1);

let [, a2, b2] = arr;
console.log(a2, b2);

let tuple4: [string, number, string] = ['rose', 36, 'davy'];
let [wife1, age1, hus1] = tuple4;
console.log(wife1, age1, hus1);


type C = {name: string, age?: number};

function person(c: C): void {
    console.log(c.name, c.age);
}

person({name: 'rose'});

function testDef({a, b = 36} = {a: ""}):void {
    console.log(a, b);
}

testDef({a: 'rose'});