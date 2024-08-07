class Filme{
    nome: string;
    categoria: string;
    duracao: number;
    atores: Array<string>;
}

const starWars = new Filme();
starWars.nome = "Star Wars";
starWars.duracao = 200;
starWars.atores = [
    "Bruce Wayne",
    "Mulher Maravilha",
    "Thanos"
]

//console.log(starWars)

//aqui estamos criando uma instância
class Aluno{
    //propriedades são características
    nome: string
    nota1: number
    nota2: number
    nota3: number

//construtor permite construir  objeto da forma correta, ou seja nome recebe tipo string, nota tem que ser de 0 até 10
    constructor(nome: string, nota1: number, nota2: number, nota3: number){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    //método vai fazer a função do que aquilo vai fazer
    calcularMedia(): number{
        return(this.nota1 + this.nota2 + this.nota3) / 3
    }
}

let victor: Aluno = new Aluno("Victor", 0, 1.5, 7);
victor.nota1 = 0;
victor.nota2 = 0;
let mediaVictor = victor.calcularMedia();

let pedro: Aluno = new Aluno("Pedro", 5, 4, 9.7);

console.log(victor);
console.log(mediaVictor);
console.log(pedro);
console.log(pedro.calcularMedia());