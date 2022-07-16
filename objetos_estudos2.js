//15.07.2022

const pessoa = {
    "nome" : "Julio",
    "sobrenome" : "Bernardes",
    "peso" : 78,
    "olhos" : "castanho"
}

//Adicionando novo atributo a objeto pessoa
pessoa.filhos = 3;

//Deletando um componente do objeto
delete pessoa.olhos;

//Vamos ver como está o objeto agora:
console.log(pessoa)

//Adicionando uma chave que possui mais de um valor:
pessoa.fones = ["11 95429-3943", "11 5494-4314", "11 93413-1331"];

//Printando os telefones no console:
pessoa.fones.forEach((tel, index) => console.log(`Telefone ${index+1}: ${tel}\n`));

//Adicionando objeto dentro de objeto
pessoa.pet = {
    nome_pet : "Canino",
    raca_pet : "Pitbull",
    idade_pet : 2,
    cor_pet : "Marrom"
}

//Acessando nome do pet do cliente
console.log(`O nome do pet de ${pessoa.nome} é: ${pessoa.pet.nome_pet}`)
