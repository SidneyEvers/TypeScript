/* classe-heranca-exemplo-conta-bancaria.ts */
class ContaBancaria {
    protected numeroConta: string;
    protected saldo: number;
    protected cliente: string;
    /*
    Encapsulamento: 
    - public: é possível acessar métodos, propriedades em qualquer lugar, em classes filhas ou em objetos
    - private: é possível acessar métodos, propriedades na própria classe ou classes filhas
    - protected: é possível acessar métodos, propriedades na própria classe
    */

    constructor(numeroConta: string, cliente: string) {
        this.numeroConta = numeroConta;
        this.cliente = cliente;
        this.saldo = 0;
    }

    public depositar(valor: number): void {
        console.log(`Depositado: R$ ${valor}. Saldo anterior: R$ ${this.saldo.toFixed(2)}. Saldo atual: R$ ${this.saldo + valor}`);
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        if(this.validarValorNegativoSaque(valor) === false)
        return;

        if(valor > this.saldo){
            console.log("ERRO: Saque não realizado, pois o saldo é insuficiente");
            return;
        }

        console.log(`Saque: R$ ${valor}. Saldo anterior: R$ ${this.saldo}. Saldo atual: R$ ${this.saldo - valor}`);
        this.saldo -= valor;
    }

    protected validarValorNegativoSaque(valor:number):boolean{
        if (valor <= 0) {
            console.log("ERRO: Depósito não realizado, valor de depósito deve ser positivo.");
            return;
        }
    }
    public obterNomeCliente() {
        return this.cliente;
    }

    public apresentarDados() {
        console.log("Cliente: " + this.cliente + 
        "\n Saldo: R$ " + this.saldo.toFixed(2));
    }
}

class ContaCorrente extends ContaBancaria{
    private chequeEspecial:number;

    constructor(numeroConta:string, nome:string, sobrenome:string, score:number){
        super(numeroConta,nome);
        // atualizando o nome completo do cliente com nome e sobrenome
        this.cliente = `${nome} ${sobrenome}`;
        this.chequeEspecial= this.calcularChequeEspecial(score);
        
    }
    private calcularChequeEspecial(score:number):number{
        if(score >= 0 && score <= 150){
            return 0;
        }
        else if(score <= 300){
            return 100;
        }
        else if(score <= 500){
            return 500;
        }
        else if(score <= 750){
            return 2500;
        }
        else if(score <= 900){
            return 5000;
        }
        else if(score <= 950){
            return 10000;
        }
        else {
            return Number.MAX_SAFE_INTEGER;
        }
    }
    //sobreescrevendo o comportamento do método da classe pai, ou seja, adicionando o próprio comportamento 
    public override apresentarDados(): void {
        //chamando o apresentarDados() da classe pai(ContaCorrente)
        super.apresentarDados();
        //adicionando o comportamento diferente da classe pai
        console.log("Cheque especial: " + this.chequeEspecial)
    }
    public override sacar(valor: number): number {
        if(super.validarValorNegativoSaque(valor) === false)
        return;

        if(valor > this.saldo + this.chequeEspecial){
            console.log("ERRO: Saque não realizado, pois o saldo + limite é insuficiente")
            return;
        }
        
        console.log(`Saque: R$ ${valor}. Saldo anterior: R$ ${this.saldo}. Saldo atual: R$ ${this.saldo - valor}.`);
        this.saldo -= valor;
    }
    
}

// let valorScore = 2;
// let sidney = new ContaCorrente("1234","Sidney","Evers", valorScore);
// sidney.depositar(4000)
// sidney.sacar(2000)
// sidney.apresentarDados()


// let conta = new ContaBancaria("1A", "Pedro");
// conta.depositar(100);
// conta.depositar(250);
// conta.depositar(-10);
// conta.sacar(300);
// conta.sacar(-10);
// conta.sacar(100);
// conta.apresentarDados();
/* classe-heranca-exemplo-conta-bancaria.ts */

class ContaPoupanca extends ContaBancaria{
    private taxaJuros:number;

    constructor(numero:string, cliente:string, taxaJuros:number){
        super(numero, cliente);

        this.taxaJuros = taxaJuros;
    }

    public aplicarJuros(): void{
        let taxaJuros = this.taxaJuros / 100;

        let juros = this.saldo * taxaJuros;
        this.saldo += juros;
    }

   //sobreescrevendo o comportamento do método da classe pai, ou seja, adicionando o próprio comportamento 
   public override apresentarDados(): void {
    //chamando o apresentarDados() da classe pai(ContaCorrente)
    super.apresentarDados();
    //adicionando o comportamento diferente da classe pai
    console.log("Taxa de juros: " + this.taxaJuros)}
    
}

let contaJessica = new ContaPoupanca("98745","Jessica",7.28);
contaJessica.depositar(9750.20);
contaJessica.apresentarDados();

contaJessica.aplicarJuros();
contaJessica.apresentarDados();