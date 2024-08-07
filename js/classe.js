var UsuarioDeMaior = (function () {
    function UsuarioDeMaior(nome, idade) {
        this.nome = nome;
        if (idade < 18) {
            throw Error("Você é menor de idade");
        }
        else if (idade > 80) {
            throw Error("Você é além da idade permitida para dirigir");
        }
        this.idade = idade;
    }
    return UsuarioDeMaior;
}());
try {
    var sidneyMaior = new UsuarioDeMaior("Sidney", 20);
    console.log(sidneyMaior);
}
catch (error) {
    console.log("Erro: " + error);
}
finally {
    console.log("Idade verificada com sucesso");
}
