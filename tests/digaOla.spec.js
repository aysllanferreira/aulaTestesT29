const digaOla = require('../functions/digaOla');

describe('Teste da função digaOla', () => {
  it('Teste se a função digaOla é definida', () => {
    expect(digaOla).toBeDefined();
  });

  it('Teste se a função digaOla retorna a frase "Olá, eu me chamo nome!"', () => {
    expect(digaOla('Joao')).toBe('Olá, eu me chamo Joao!');
  });
});
