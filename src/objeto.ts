/*let cliente = {
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

PascalCase => ClientePessoaFisica
CalmeCase => clientePessoaFisica
SneakCase => cliente_pessoa_fisica
KebabCase => cliente-pessoa-fisica
*/


let pontoTuristico1 = {
    nome: "Proeb",
    preco: 100.00,
    estado: "SC",
    cidade: "Blumenau",
    bairro: "Velha",
    logradouro: "Rua Albert Stein",
    numero: 150,
    complemento: "--"
}

let pontoTuristico2 = {
    nome: "Melmann",
    preco: 200.00,
    estado: "SC",
    cidade: "Blumenau",
    bairro: "Centro",
    logradouro: "Rua Xv de Novembro",
    numero: 400,
    complemento: "Sem complemento"
}

console.log(`Nome: ${pontoTuristico1.nome}`)
console.log(`Preço: ${pontoTuristico1.preco}`)
console.log(`Estado: ${pontoTuristico1.estado}`)
console.log(`Cidade: ${pontoTuristico1.cidade}`)
console.log(`Bairro: ${pontoTuristico1.bairro}`)
console.log(`Logradouro: ${pontoTuristico1.logradouro}`)
console.log(`Número: ${pontoTuristico1.numero}`)
console.log(`Complemento: ${pontoTuristico1.complemento}`)

console.log(`\r\nNome: ${pontoTuristico2.nome}`)
console.log(`Preço: ${pontoTuristico2.preco}`)
console.log(`Estado: ${pontoTuristico2.estado}`)
console.log(`Cidade: ${pontoTuristico2.cidade}`)
console.log(`Bairro: ${pontoTuristico2.bairro}`)
console.log(`Logradouro: ${pontoTuristico2.logradouro}`)
console.log(`Número: ${pontoTuristico2.numero}`)
console.log(`Complemento: ${pontoTuristico2.complemento}`)