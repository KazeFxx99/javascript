// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

for (let i = 1; i < 10; i++) {
    console.log(i)
}

let i = 1
while (i < 10) {
    console.log(i)
    i++
}

ulang = 'y'
while (ulang === 'y') {
    console.log('Hello World')
    ulang = prompt('Mau ulang lagi? (y/n) ')
}    

