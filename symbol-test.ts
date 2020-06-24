/// <reference path="md/Validator.ts" />
console.log(new Validation.ZipcodeValidator().test("ABCDEF"));

let arr: Array<any> = [1, 'a', true];

for(let v in arr) {
    console.log(v);
}

for(let v of arr) {
    console.log(v);
}