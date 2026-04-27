const prompt =require("prompt-sync")({sigint:true});
let siswaXrpl1 =parseInt(prompt ("masukan jumlah siswa X RPL 1:"));
let siswaXrpl2 =parseInt(prompt("masukan jumlah siswa X RPL2:"));
let siswatkj11 =parseInt(prompt("masukan jumlah siswa X TKJ1:"));
let siswatkj2 =parseInt(prompt("masukan jumlah siswa tkj2: "));

let totalsiswa=siswaXrpl1 +siswaXrpl2 +siswatkj11 +siswatkj2;

console.log("jumlah total semua siswa:",totalsiswa);