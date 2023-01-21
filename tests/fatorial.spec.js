const fatorial = require('../functions/fatorial');

describe('Teste da função fatorial', () => {
  it('Teste se a funcao foi definida', () => {
    expect(fatorial).toBeDefined();
  })

  it('Teste se a funcao vai lancar um erro', () => {
    expect(() => fatorial('a')).toThrow();
  })

  it('Testa se passando o argumento 0 como parametro, o valor retornado sera 1', () => {
    expect(fatorial(0)).toBe(1);
  })

  it('Testa se passando um numero como paramentro, o valor retornado sera o fatorial desse numero', () => {
    expect(fatorial(5)).toBe(120);
  })
});