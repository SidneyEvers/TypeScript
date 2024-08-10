class Animal{
    public nome:string;

    constructor(nome:string){
        this.nome = nome;
    }

    public mover(distanciaEmMetros:number){
        console.log(`${this.nome} moveu-se ${distanciaEmMetros} metros.`);
    }
}
//Cachorro é uma subclasse que herda de ANIMAL
class Cachorro extends Animal{
    public anos:number;

    constructor(nome:string, anos:number){
        super(nome) //Passa os parâmetros do construtor do pai,para a classe Pai
        this.anos = anos;
    }
}
const dog = new Cachorro("Nestor", 10)
console.log(dog)

class Gato extends Animal{
    public qtdeDeVidas: number;
    constructor(nome:string, qtdeDeVidas: number){
        super(nome);
        this.qtdeDeVidas = qtdeDeVidas
    }
}
const cat = new Gato("Tobias", 7);

console.log(cat)


// const galinha = new Animal("Galinha");
// galinha.mover(10);