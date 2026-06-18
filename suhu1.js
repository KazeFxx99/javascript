// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let diulang = 'y';
do {
    let suhu = Number(prompt('suhu air : '));

    if (suhu > 100) {
        console.log('air berbentuk gas');
    } else if (suhu === 100) {
        console.log('air mendidih');
    } else if (suhu > 0 && suhu < 100) {
        console.log('air berwujud cair');
    } else if (suhu <= 0) {
        console.log('air berwujud padat (es)');
    }

    diulang = prompt('diulang (y/n)? ');
} while (diulang === 'y');