const say = (message: string): void => {
    console.log(message);
};

say("Hello, World!");

const multiply = (x: number, y: number): number => {
    return x * y;
};

let result: number = multiply(4, 5);
console.log("Result: " + result);