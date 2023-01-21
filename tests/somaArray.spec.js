const somaArray = require('../functions/somaArray');

describe('Teste da função somaArray', () => {
  it('Teste se a função somaArray é definida', () => {
    expect(somaArray).toBeDefined();
  });

  it('Teste se a função somaArray retorna a soma de todos os valores do array', () => {
    expect(somaArray([1, 2, 3, 4])).toBe(10);
  });
});