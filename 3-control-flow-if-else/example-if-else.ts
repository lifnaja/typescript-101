function processInput(input: number | string): void {
    if (typeof input === "number") {
        console.log(`You entered the number: ${input}`);
    } else {
        console.log(`You entered the string: "${input}"`);
    }
}

processInput(15);
processInput(5);
processInput("TypeScript");