const calculaArea = require('../functions/calculaArea');

describe('Teste da função calculaArea', () => {
  it('Teste se a função calculaArea é definida', () => {
    expect(calculaArea).toBeDefined();
  });

  it('Teste se a função calculaArea retorna o valor da área do círculo', () => {
    expect(calculaArea(2)).toBeCloseTo(12.57);
  });
});