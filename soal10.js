const prompt =require("prompt-sync")({sigint:true})
let judul,penerbit,jumlah,tanggal
judul =parseInt(prompt(`judul buku :`))
penerbit =parseInt(prompt(`penerbit :`))
jumlah =parseInt(prompt(`jumlah buku :`))
tanggal =parseInt(prompt(`tanggal pembelian:`))

console.log(`judul buku :${judul}`)
console.log(`penerbit   :${penerbit}`)
console.log(`jumlah buku :${jumlah}`)
console.log(`tanggal pembelian :${tanggal}`)