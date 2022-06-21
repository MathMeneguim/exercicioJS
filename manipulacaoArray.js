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


console.log('\n4. Encontre o menor valor.');
  function menorNumero(numArray) {
    return Math.min.apply(null, numArray);
  }
  console.log('Menor Numero =', menorNumero(lista));


console.log('\n5. Remova o quinto elemento da lista.');
  lista.splice(4,1);
  console.log('lista sem o quinto elemento = ',lista);


console.log('\n6. Mova o sétimo elemento para a segunda posição.');
  function changePosition(lista, from, to) {
    lista.splice(to, 0, lista.splice(from, 1)[0]);
    return lista;
  };
  listaMovida = changePosition(lista, 6, 1);
  console.log('lista com elemento movido = ',listaMovida);
