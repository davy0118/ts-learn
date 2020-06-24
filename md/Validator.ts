namespace Validation {
    export interface Validator<T> {
        test(value: T): boolean
    }

    export class ZipcodeValidator implements Validator<string> {
        test(value: string): boolean {
            return value && value.length == 6;
        }
    }
}