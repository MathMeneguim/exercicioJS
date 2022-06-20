//Arquivo dedicado a manipulacao de arrays

let lista = [ 1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3 ]


console.log('1. Classifique a lista em ordem crescente.');
lista.sort((a, b) => a - b);
console.log(lista)



console.log('2. Classifique a lista em ordem decrecente.');
lista.sort((a, b) => b - a);
console.log(lista)


console.log('3. Encontre o maior valor.');
lista.sort((a, b) => b - a);
console.log(lista[0]);


console.log('4. Encontre o menor valor.');
lista.sort((a, b) => a - b);
console.log(lista[0]);



console.log('5. Remova o quinto elemento da lista.');
console.log(lista);

lista.splice(4,1);
console.log(lista);


console.log('6. Mova o sétimo elemento para a segunda posição.');
function changePosition(lista, from, to) {
  lista.splice(to, 0, lista.splice(from, 1)[0]);
  return lista;
};
lista = changePosition(lista, 6, 1);
console.log(lista);


console.log('7. Inclua um elemento com o valor "100" na terceira posição.');
console.log(lista)
lista.splice(2,0, 100)
console.log(lista)


console.log('8. Remova os valores duplicados.');



console.log('9. Separe em duas listas sendo a primeira 1 elemento maior que a segunda, uma contendo os menores valores e outra com os maiores.');

console.log('10. Exiba na tela três valores que representam exatamente os elementos posicionados no meio da lista.');
