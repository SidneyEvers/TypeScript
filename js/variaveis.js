function exemplo01() {
    var nomeUsuario = "Bruce Wayne";
    var apelido = "Batman";
    var ano = 59;
    var patrimonio = 9999.99;
    var estaEmpregado = true;
    var filhoMarta = true;
    estaEmpregado = true;
    filhoMarta = false;
    var titulo = document.querySelector("h1");
    titulo.innerText = nomeUsuario;
    var paragrafo = document.querySelector("p");
    paragrafo.innerText = "\n    nome: ".concat(nomeUsuario, "\n    apelido: ").concat(apelido, "\n    Idade: ").concat(ano, "\n    Patrimonio: ").concat(patrimonio, "\n    Empregado: ").concat(convertBooleanParaString(estaEmpregado), "\n    Filho da Marta: ").concat(convertBooleanParaString(filhoMarta));
}
function convertBooleanParaString(valor) {
    if (valor) {
        return "Sim";
    }
    return "Não";
}
exemplo01();
