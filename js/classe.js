var Filme = (function () {
    function Filme() {
    }
    return Filme;
}());
var starWars = new Filme();
starWars.nome = "Star Wars";
starWars.duracao = 200;
starWars.atores = [
    "Bruce Wayne",
    "Mulher Maravilha",
    "Thanos"
];
var Aluno = (function () {
    function Aluno(nome, nota1, nota2, nota3) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    Aluno.prototype.calcularMedia = function () {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    };
    return Aluno;
}());
var victor = new Aluno("Victor", 0, 1.5, 7);
victor.nota1 = 0;
victor.nota2 = 0;
var mediaVictor = victor.calcularMedia();
var pedro = new Aluno("Pedro", 5, 4, 9.7);
console.log(victor);
console.log(mediaVictor);
console.log(pedro);
console.log(pedro.calcularMedia());
