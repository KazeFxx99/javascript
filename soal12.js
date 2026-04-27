const prompt=require("prompt-sync")({igint:true})
let r=parseFloat(prompt("masukan jari-jari bola:"));

let volume=(4/3) * Math.PI * Math.pow(r,3);
let luaspermukaan = 4 * Math.PI * Math.pow(r,2);

console.log("Volume bola:", volume);
console.log("luas permukaan bola:", luaspermukaan);