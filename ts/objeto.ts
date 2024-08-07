let cliente = {
    nome: "Maria",
    idade: 28,
    cargo: "Youtuber",
    videos: [
        "Dark Souls 1 Platinado",
        "Dark Souls 2 Gameplay",
        "Galinha pintadinha até o fim"
    ]
}

console.log(`Nome: ${cliente.nome}`)
console.log(`Idade: ${cliente.idade} `)
console.log(`Cargo: ${cliente.cargo}`)
console.log("Videos: ")
for (let index = 0; index < cliente.videos.length; index++) {
    const video = cliente.videos[index];
    console.log(`\t${video}`)
}