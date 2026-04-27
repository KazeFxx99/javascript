const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan namamu: ", (name) =>{
    console.log(`Apakabar ${name}? Wish you luck!`);
    rl.close();
});
