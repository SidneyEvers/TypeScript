function dividir(numero1:number, numero2:number){
    if(numero2 === 0 || numero1 ===0){
        throw Error("Nenhum dos números pode ser 0")
    }
    return numero1 / numero2;
}

function exemploTratamentoExcecao01() {
    try {
        console.log(dividir(0, 2));
        console.log("Deu boa");
    } catch (error) {
        console.log(error.message);
    }
    console.log("Acabou a aplicação");
}

function calcularImc(peso:number,altura:number):number {
    if(peso <= 0){
        throw Error("Peso inválido! Peso não pode ser menor ou igual a 0")
    }
    if(peso >= 400){
        throw Error("Peso inválido! Peso não pode ser maior ou igual a 400.00")
    }
    if(altura <= 0){
        throw Error("Altura inválida! Altura não pode ser menor ou igual a 0")
    }
    if(altura >= 2.60){
        throw Error("Altura inválida! Altura não pode ser maior ou igual a 2.60")
    }

    
    let imc = peso / (altura * altura);
    return imc;
}

try{
    console.log(calcularImc(-20, 1.63))
}catch(error){
    console.log(error.message)
}
console.log("Obrigado")


//exemploTratamentoExcecao01();