const prompt =require("prompt-sync")({sigint:true})
let nama,nilai,kelulusan
nama=parseInt(prompt(`Nama: `))
nilai=parseInt(prompt(`Nilai rapot: `))
if (nilai >= `85`) 
    {console.log(`Lulus`)
}else if (nilai <= `85`) {
    console.log(`Tidak Lulus`)
}