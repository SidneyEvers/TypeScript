class Transporte{
    protected tipo: string;
    protected velocidadeMaxima: number;
    protected capacidadeDePassageiros: number;

    constructor(tipo:string,velocidadeMaxima:number, capacidadeDePassageiros:number){
        this.tipo = tipo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.capacidadeDePassageiros = capacidadeDePassageiros;
    }

    public informacoes():string{
        let infoBasicas = `Tipo: ${this.tipo}
        \nVelocidade Máxima: ${this.velocidadeMaxima}
        \nCapacidade de Passageiros: ${this.capacidadeDePassageiros}`

        return infoBasicas;
    }

}

class Carro extends Transporte{
    private numeroDePortas: number;

    constructor(numeroDePortas:number){
        super("Carro",220,5)
        this.numeroDePortas = numeroDePortas;   
    }
    public override informacoes(){
        let infoBasicas = `${super.informacoes()}
        \nQuantidade de portas: ${this.numeroDePortas} Portas. `

        return infoBasicas;
    }

    public abrirPortas(quantidadeDePortasAbertas:number):string{
        if(quantidadeDePortasAbertas > this.numeroDePortas){
            let numeroInvalido = "Número inválido, não é possível abrir mais portas do que o veículo possui"
            return numeroInvalido;
        }
        let portasAbertas = `Foram abertas ${quantidadeDePortasAbertas} Portas.`

        return portasAbertas;
    }
}
let carroQuantidade = new Carro(6);
console.log(carroQuantidade);
// carroQuantidade.abrirPortas(3);
console.log(carroQuantidade.abrirPortas(3));

class Aviao extends Transporte{
    private alcanceDeVoo:number;

    constructor(alcanceDeVoo:number){
        super("Avião",800,95)
        this.alcanceDeVoo = alcanceDeVoo;
        this.alcanceDeVoo = alcanceDeVoo;
    }
    public override informacoes():string{
        let infoBasicas = `${super.informacoes()}
        \nAlcance de Vôo: ${this.alcanceDeVoo}`

        return infoBasicas;
    }

    public alcanceEmKm(alcanceDeVoo:number):string{

        let vooEmKm = `Esse ${this.tipo} tem um alcance de Vôo de ${alcanceDeVoo} kilômetros.`
        return vooEmKm;
    }
}
let alcanceAviao = new Aviao(4000);
console.log(alcanceAviao)
console.log(alcanceAviao.alcanceEmKm(4000))

class Moto extends Transporte{
    private cilindradas:number;

    constructor(cilindradas:number){
        super("Moto",140,2)
        this.cilindradas = cilindradas;
    }

    public override informacoes(): string {
        let infoBasicas = `${super.informacoes()}
        \nCilindradas: ${this.cilindradas}`

        return infoBasicas;
    }

    public apresentandoCilindradas(qtdeCilindradas:number):string{
        let cilindradasApresentar = `Essa ${this.tipo}, com capacidade para ${this.capacidadeDePassageiros} possui ${this.cilindradas} cilindradas.`;

        return cilindradasApresentar;
    }
}
let novaMoto = new Moto(800);
console.log(novaMoto)
console.log(novaMoto.apresentandoCilindradas(800));




