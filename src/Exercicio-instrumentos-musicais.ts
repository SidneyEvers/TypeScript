class InstrumentoMusical{
    protected nome: string;
    protected tipo: string;

    constructor(nome:string, tipo:string){
        this.nome = nome;
        this.tipo = tipo;
    }

    public tocar(): string {
        console.log(`Tocando instrumento`)
        let tocarInstrumento = "Tocando instrumento";
        
        return tocarInstrumento;
    }
    
}
let instrumento = new InstrumentoMusical("Instrumento", "Tipo do instrumento");
//instrumento.tocar();

class Violao extends InstrumentoMusical{
    public numeroDeCordas:string;

    constructor(numeroDeCorda:string){
        super("Violao","Cordas")
        this.numeroDeCordas = numeroDeCorda;
    }

    public override tocar():string{
        

        let violao = `Nome: ${this.nome}.
        \nTipo: ${this.tipo}
        \nTocando instrumento de ${this.numeroDeCordas} cordas`
        
        return violao;
    }
        
}
let violaoTocar = new Violao("6");
console.log(violaoTocar.tocar());

class Flauta extends InstrumentoMusical{
    public material: string;

    constructor(material:string){
        super("Flauta","Sopro")
        this.material = material;
    }

    public override tocar():string{

        let flauta = `Tocando flauta feita de material ${this.material}`
        return flauta;
    }
}
let flautaTocar = new Flauta("Madeira");
console.log(flautaTocar.tocar());

