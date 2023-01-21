// A funcao recebe um numero e retorna o fatorial dele

function fatorial(numero) {
  if (typeof numero !== 'number') {
    throw new Error('O parâmetro deve ser um número');
  }

  if (numero === 0) {
    return 1;
  }
  return numero * fatorial(numero - 1);
}

module.exports = fatorial;