function calcularIdade(anoNascimento: number): number{
    if(anoNascimento < 1900){
        throw Error("Ano de nascimento não pode ser menor do que 1900")
    }
    if(anoNascimento > 2024){
        throw Error("Ano de nascimento não pode ser maior do que 2024")
    }
    const date = new Date();
    let anoAtual = date.getFullYear();
    let idadeAtual = anoAtual - anoNascimento;
    return idadeAtual;

}

try{
    
    console.log(calcularIdade(1997))
}catch(error){
    console.log(error.message)
}
finally{
    console.log("Verificação finalizada!")
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