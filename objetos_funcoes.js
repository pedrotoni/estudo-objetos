const pessoa = {
    nome:"João",
    sobrenome:"Gomes",
    idade:49,
    altura:1.76,
    peso:79,
    filhos: [
        {
        nome:"Gabriela",
        idade:3
        }, 
        {
        nome:"Julio",
        idade:7
        }
    ],
    telefones: ['1143954312', '11954039211', '11958403921'],
    saldoConta: 3000,
    /**
     * @param {number} valor 
     */
    depositar: function(valor) {
        this.saldoConta += valor;
    },
    /**
     * @param {number} valor 
     */
    sacar: function(valor) {
        this.saldoConta -= valor;
    }

}

pessoa.depositar(1500)
pessoa.sacar(700)

console.log(pessoa.saldoConta);

//Se formos criar um novo objeto com base no objeto pessoas que já foi criado,
const pessoa2 = pessoa;
//e tentarmos mudar algum valor, por exemplo nome
pessoa2.nome = "Alberto";
console.log(pessoa.nome,pessoa2.nome);
//O resultado será Alberto Alberto, pois quando fazemos dessa forma, uma alteração em um objeto muda os dois.
//Para que isso não ocorra, utilizamos Object.create() e passamos o objeto já existente como parametro
const pessoa3 = Object.create(pessoa);
pessoa3.nome = "Flávio";
console.log(pessoa.nome,pessoa3.nome);
//Agora temos como input Alberto Flávio, pois com o Object.create, pessoa3 é uma instancia diferente de pessoa.
//Qualquer alteração em pessoa3 não altera objeto pessoa.
pessoa3.altura = 1.99
pessoa3.peso = 87;
console.log(pessoa.altura,pessoa3.altura)
console.log(pessoa.peso,pessoa3.peso)