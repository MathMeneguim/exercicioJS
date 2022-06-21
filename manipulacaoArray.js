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


console.log('\n7. Inclua um elemento com o valor "100" na terceira posição.');
  lista.splice(2,0, 100)
  console.log('lista com o numero 100 = ', lista)


console.log('\n8. Remova os valores duplicados.');
  const uniqueNum = [...new Set(lista)];
  console.log('lista sem valors duplicados = ', uniqueNum)


console.log('\n9. Separe em duas listas sendo a primeira 1 elemento maior que a segunda, uma contendo os menores valores e outra com os maiores.');
  function array_chunk(arr, len) {
    let chunks = [], i = 0, n = arr.length
    while (i < n) {
      chunks.push(arr.slice(i, i += len))
    }
    return chunks
  } //funcao que divide array em 'subarrays' 'arr = nome do array, len = em quantos dividir'
  lista.sort((a, b) => a - b); //ordena o array principal
  console.log(array_chunk(lista, (lista.length/2))); //len = o numero de elementos da lista dividido por 2

