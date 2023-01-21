const equals = require('../functions/equals');

describe('Teste da função equals', () => {
  it('Teste se a função equals é definida', () => {
    expect(equals).toBeDefined();
  });

  it('Teste se a função equals retorna true quando os parâmetros são iguais', () => {
    expect(equals(1, 1)).toBe(true);
  });

  it('Teste se a função equals retorna false quando os parâmetros são diferentes', () => {
    expect(equals(1, 2)).toBe(false);
  });
});

