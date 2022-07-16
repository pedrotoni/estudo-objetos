//14.07.2022

const customer = {
    name : "Pedro",
    age : 28,
    height : 1.72,
    CPF : "34643943920"
}

//Acessando o dado da chave nome
console.log(`O nome do cliente é: ${customer.name}`);

//Acessando os 3 primeiros digitos do CPF 
console.log(`Os 3 primeiros digitos do CPF são: ${customer.CPF.substring(0,3)}`);

//Acessando por altura pela chave dentro de um array de chaves
const keys = ["name","age","height","CPF"];
console.log(`A altura do cliente é: ${customer[keys[2]]}`);

//Podemos também criar uma const com o nome de uma chave para acessar uma chave específica
const key = "age";
console.log(`A idade do cliente é: ${customer[key]} anos\n`)

//Mostrando dados do objeto pelo método de iteração forEach
keys.forEach((info, index) => console.log(`Dado ${index+1} ---> ${customer[info]}\n`));