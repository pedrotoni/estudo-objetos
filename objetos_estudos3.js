//15.07.2022

const pessoa = {
    nome: 'Julio',
    sobrenome: 'Bernardes',
    peso: 78,
    filhos: 3,
    fones: [ '11 95429-3943', '11 5494-4314', '11 93413-1331' ],
    pet: [{
      nome_pet: 'Canino',
      raca_pet: 'Pitbull',
      idade_pet: 2,
      cor_pet: 'Marrom'
    }]
  }

  //Adicionando um novo objeto chave pet, que é um array que contém apenas um objeto
  //Utilizamos método push pois a chave pet tem um valor de array
  pessoa.pet.push({
    nome_pet : "Belinha",
    raca_pet : "SRD",
    idade_pet: 6,
    cor_pet : "Preto"
  })
  
  //Utilizando filter para printar o nome do Pet que é da raça Pitbull
  const dogPitbull = pessoa.pet.filter((dog) => dog.raca_pet === "Pitbull");
  
  //Como filter vai retornar um array com apenas um valor, podemos referenciar 
  //o index [0] para pegar este elemento desejado.
  console.log(`O nome do Pitbull de ${pessoa.nome} é: ${dogPitbull[0].nome_pet}`);

