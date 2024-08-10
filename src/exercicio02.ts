class AnoNascimentoAbaixoDoMinimoError extends Error{
    constructor(mensagem:string){
        super(mensagem);
        this.name = "AnoNascimentoAbaixoDoMinimo";
    }
}
class AnoNascimentoAcimaDoMaximoError extends Error{
    constructor(ano_maximo: number){
        super(`Ano Nascimento inválido! Valor deve ser abaixo de ${ano_maximo}`);
        this.name = "AnoNascimenoAcimaDoMaximo";
    }
}


function calcularIdade(anoNascimento: number): number{
    if(anoNascimento < 1900){
        throw new AnoNascimentoAbaixoDoMinimoError("Ano de nacimento inválido! O ano de nascimento deve ser maior que 1899")
    }
    const dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();

    if(anoNascimento > anoAtual){
        throw new AnoNascimentoAcimaDoMaximoError(anoAtual + 1)
    }

    let idadeAtual = anoAtual - anoNascimento;
    return idadeAtual;

}

try{
    let idade = calcularIdade(2024);
    console.log(`Idade ${idade}`);
}catch(error){
    if(error instanceof AnoNascimentoAbaixoDoMinimoError || error instanceof AnoNascimentoAcimaDoMaximoError){
        console.log("Erro no campo de Ano de Nascimento");
        console.error(error.message);
        console.error(error.name);
        //console.error(error.stack);
    }
    else{
        console.log(error.message)
    }
}






// function calcularSalarioBruto(valorHora:number, quantidadeHoras:number): number{
//     if(valorHora <= 0){
//         throw Error("Valor hora não pode ser igual ou menor que 0!")
//     }
//     if(valorHora > 350.99){
//         throw Error("Valor hora não pode ser maior que R$ 350,00")
//     }
//     if(quantidadeHoras <= 0){
//         throw Error("Quantidade de horas não pode ser menor ou igual a 0")
//     }
//     if(quantidadeHoras > 440){
//         throw Error("Quantidade de horas não pode ser superior que 440:00hr")
//     }
    
    

//     let salarioBruto = valorHora * quantidadeHoras;
//     return salarioBruto; 
// }
// try{
//     console.log(`Seu salário bruto é de R$  ${calcularSalarioBruto(350.00,800)}`)
// }catch(error){
//     console.log(error.message)
// }
// finally{
//     console.log("Validação finalizada!")
// }



