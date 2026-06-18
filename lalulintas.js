// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let ulang = 'y';
do { 
    let warna = prompt('Masukkan warna (merah, kuning, hijau): ');

    if (warna === 'merah') {
        console.log('berhenti');
    } else if (warna === 'kuning') {
        console.log('bersiap');
    } else if (warna === 'hijau') {
        console.log('jalan');
    } else {
        console.log('warna tidak dikenali');
    }

    ulang = prompt('Ulang? (y/n): ');
} while (ulang === 'y' || ulang === 'Y');
