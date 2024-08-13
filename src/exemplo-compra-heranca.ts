class Compra {
    private nome: string;
    private valor: number;
    private valorEfetivo: number;
    private compraRealizada: boolean;
    private motivo: string;

    constructor(nome: string, valor: number){
        this.nome = nome;
        this.valor = valor;
        this.compraRealizada = false;
        this.valorEfetivo = 0;
    }

    comprar(valorEfetivo: number){
        this.valorEfetivo = valorEfetivo;
        this.compraRealizada = true;
    }

    desfazerCompra(motivo: string){
        if (this.compraRealizada === true){
            this.compraRealizada = false;
            this.valorEfetivo = 0;
            this.motivo = motivo;
        }
    }
}

let xbox = new Compra("Xbox", 4500);
let qn90d = new Compra("65QN90D", 7500);
qn90d.comprar(10500);
qn90d.desfazerCompra("A mulher dele disse que ele n queria.");