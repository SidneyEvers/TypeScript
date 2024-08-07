
/*Método 01 é um método sem retorno(void)*/
/*function exemplo01(): void {

    let nomeUsuario: string = "Bruce Wayne";
    let apelido: string = "Batman";
    let ano: number = 59;
    let patrimonio: number = 9999.99;
    let estaEmpregado: boolean = true;
    let filhoMarta: boolean = true;

    //atualizando o estado de empregado do Robin
    estaEmpregado = true;
    filhoMarta = false;

    //let estaEmpregadoTexto = convertBooleanParaString(estaEmpregado);
 
    let titulo = document.querySelector("h1");
    titulo.innerText = nomeUsuario;

    let paragrafo = document.querySelector("p");
    paragrafo.innerText = `
    nome: ${nomeUsuario}
    apelido: ${apelido}
    Idade: ${ano}
    Patrimonio: ${patrimonio}
    Empregado: ${convertBooleanParaString(estaEmpregado)}
    Filho da Marta: ${convertBooleanParaString(filhoMarta)}`;
}

function convertBooleanParaString(valor: boolean): string{
    if(valor){
        return "Sim";
    }
    return "Não";
}
*/
function exercicio01(){
    let nomeCliente: string = "Luiz e Enzo Comercio de Bebidas Ltda";
    let cnpjCliente: string = "77.863.722/0001-02";
    let incricaoEstadual: number = 660534142;
    let razaoSocial: string = "Bebidas Luiz e Enzo";
    let categoria: string = "Alimentício";
    let falida: boolean = false;

  
    console.log(`
        nome: ${nomeCliente}
        CPNJ: ${cnpjCliente}
        Inscrição estadual: ${incricaoEstadual}
        Razão Social: ${razaoSocial}
        Categoria: ${categoria}
        Está falida? ${converterBoolean(falida)}
    `)
}
function converterBoolean(falidaN: boolean): string{
    if(falidaN){
        return "sim"
    }
    return "Não"

}

exercicio01();


//exemplo01();

