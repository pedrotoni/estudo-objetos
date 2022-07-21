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

//usando método for in para incluir as chaves do objeto em um array

let chavesArray = [];

for (let chaves in pessoa) {
    chavesArray.push(chaves)
}

console.log(chavesArray);



//Mostrando chaves e valores do objeto pessoa, com exceção dos metodos e arrays

let resultado = '';

for (let dado in pessoa) {
    if (typeof pessoa[dado] === 'object' || typeof pessoa[dado] === 'function') {
        continue;
    } else {
        resultado += `${dado} - ${pessoa[dado]}\n`
    }
}

console.log(resultado);