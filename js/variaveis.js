function exercicio01() {
    var nomeCliente = "Luiz e Enzo Comercio de Bebidas Ltda";
    var cnpjCliente = "77.863.722/0001-02";
    var incricaoEstadual = 660534142;
    var razaoSocial = "Bebidas Luiz e Enzo";
    var categoria = "Alimentício";
    var falida = false;
    console.log("\n        nome: ".concat(nomeCliente, "\n        CPNJ: ").concat(cnpjCliente, "\n        Inscri\u00E7\u00E3o estadual: ").concat(incricaoEstadual, "\n        Raz\u00E3o Social: ").concat(razaoSocial, "\n        Categoria: ").concat(categoria, "\n        Est\u00E1 falida? ").concat(converterBoolean(falida), "\n    "));
}
function converterBoolean(falidaN) {
    if (falidaN) {
        return "sim";
    }
    return "Não";
}
exercicio01();
