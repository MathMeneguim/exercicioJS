//Arquivo dedicado a manipulacao de arrays

const lista = [ 1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3 ]

console.log('\n1. Classifique a lista em ordem crescente.');
  console.log('Lista Crescente = ', lista.sort((a, b) => a - b))

 console.log('\n2. Classifique a lista em ordem decrecente.');
  console.log('Lista Decrescente = ', lista.sort((a, b) => b - a))

  
console.log('\n3. Encontre o maior valor.');
  function maiorNumero(numArray) {
    return Math.max.apply(null, numArray);
  }
  console.log('Maior Numero = ', maiorNumero(lista) );

