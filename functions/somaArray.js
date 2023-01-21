// Some todos os valores do array passado por parametro.

function somaArray(array) {
  let numero = 0;

  for(let i = 0; i < array.length; i += 1){
    numero += array[i];
  }
  
  return numero;
}

module.exports = somaArray;