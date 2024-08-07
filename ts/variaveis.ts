/*Método 01 é um método sem retorno(void)*/
function exemplo01(): void {

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

exemplo01();

