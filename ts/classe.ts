/*class Filme {
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
class Aluno {
    //propriedades são características
    nome: string
    nota1: number
    nota2: number
    nota3: number

    //construtor permite construir  objeto da forma correta, ou seja nome recebe tipo string, nota tem que ser de 0 até 10
    constructor(nome: string, nota1: number, nota2: number, nota3: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    //método vai fazer a função do que aquilo vai fazer
    calcularMedia(): number {
        return (this.nota1 + this.nota2 + this.nota3) / 3
    }
}

let victor: Aluno = new Aluno("Victor", 0, 1.5, 7);
victor.nota1 = 0;
victor.nota2 = 0;
let mediaVictor = victor.calcularMedia();

let pedro: Aluno = new Aluno("Pedro", 5, 4, 9.7);

/*console.log(victor);
console.log(mediaVictor);
console.log(pedro);
console.log(pedro.calcularMedia());*/

/*class Usuario {
    nome: string;
    email: string;
    telefone: number;
    whatsApp: number;
    instagram: string;
    linkedIn: string;
    senha: number;
    categoria: string;

    constructor(nome: string, email: string, telefone: number, whatsApp: number, instagram: string, linkedIn: string, senha: number, categoria: string) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.whatsApp = whatsApp;
        this.instagram = instagram;
        this.linkedIn = linkedIn;
        this.senha = senha;
        this.categoria = categoria;


    }
}
let sidney: Usuario = new Usuario("Sidney", "sidney@gmail.com", 47988888888, 47999999999, "sidneyevers", "SidneyLinkedin", 123456, "admin")

console.log(sidney)

let jessica: Usuario = new Usuario("Jessica", "jessica@gmail.com", 47991919191, 47992929292, "jessicaz", "JessicaLinkedin", 987456, "gestor")

console.log(jessica)

class Usuario2 {
    name: string;
    age: number;
    skils: Array<string>;
}

let sidneyevers = new Usuario2()
sidneyevers.name = "Sidney"
sidneyevers.age = 27
sidneyevers.skils = [
    "Html",
    "Css",
    "Js",
    "C#",
    "Sql"
]
console.log(sidneyevers)
*/
class UsuarioDeMaior {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        if (idade < 18) {
            throw Error("Você é menor de idade");
        }
        else if (idade > 80) {
            throw Error("Você é além da idade permitida para dirigir");
        }
        this.idade = idade;

    }

}

try {
    let sidneyMaior = new UsuarioDeMaior("Sidney", 20)
    console.log(sidneyMaior)
} catch (error) {
    console.log("Erro: " + error)
}
finally {
    console.log("Idade verificada com sucesso")
}



