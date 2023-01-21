// Some todos os valores do array passado por parametro.

function somaArray(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i += 1) {
    soma += array[i];
  }
  return soma;
}

module.exports = somaArray;