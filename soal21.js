const prompt=require("prompt-sync")({sigint:true})
let namasiswa = prompt("masukan nama siswa: ");
let nilai =parseFloat(prompt("maasukan nilai siswa (0-100)"));

let grade;
if(nilai >= 90  && nilai <=100) {
    grade = "A";
} else if (nilai >=80 && nilai <90){
    grade = "B"
} else if(nilai >=70 && nilai <=80) {
    grade = "C"
} else if (nilai >=60 && nilai <=70) {
    grade = "D";
} else if (nilai >=0 && nilai <=60) {
    grade = "E"
} else {
    grade = "Nilai tidak valid";
}

console.log("Nama siswa: ", namasiswa);
console.log("nilai:" ,nilai);
console.log("grade: " , grade);
