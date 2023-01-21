const fatorial = require('../functions/fatorial');

describe('Teste da função fatorial', () => {
  it('Teste se a função fatorial é definida', () => {
    expect(fatorial).toBeDefined();
  });

  it('Teste se a função fatorial retorna o fatorial de um número', () => {
    expect(fatorial(5)).toBe(120);
  });

  it('Teste se a função fatorial lança um erro quando o parâmetro nao é um número', () => {
    expect(() => fatorial('a')).toThrow();
  });

  it('Teste se a função fatorial retorna 1 quando o parâmetro é 0', () => {
    expect(fatorial(0)).toBe(1);
  });
});