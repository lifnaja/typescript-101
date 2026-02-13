function sayHello(name: string, callback: (name: string) => void) {
    const message = `Hi ${name}`;
    callback(message);
}

sayHello("robert", (name) => {
    console.log(`Hello ${name}, nice to meet you!`);
});


sayHello("martin", (name) => console.log(`Hi ${name}, welcome aboard!`));