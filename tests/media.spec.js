const average = require('../media');

describe('Teste da função media', () => {
  it('Teste se a função media é definida', () => {
    expect(average).toBeDefined();
  });

  it('Teste se a média de 4, 6 e 7 é 5.666666666666667', () => {
    expect(average(4, 6, 7)).toBe(5.666666666666667);
  });

  it('Teste se a média de 4, 6 e 7 é 5.666666666666667', () => {
    expect(average(4, 6, 7)).toBeCloseTo(5.666666666666667);
  });
});