// Retorne o email no seguinte formato: nome_sobrenome@aulao.com

function createEmail(nome, sobrenome){
  return `${ nome.toLowerCase() }_${ sobrenome.toLowerCase() }@aulao.com`;
}

module.exports = createEmail;