const bhaskara = require('../functions/bhaskara');

describe('Teste da função bhaskara', () => {
  it('Teste se a função bhaskara é definida', () => {
    expect(bhaskara).toBeDefined();
  });

  it('Teste se a função bhaskara retorna o valor de x1', () => {
    expect(bhaskara(1, 3, 2)).toEqual([-1, -2]);
  });

  it('Teste se a função bhaskara retorna o valor de x2', () => {
    expect(bhaskara(3, 1, 2)).toEqual('Delta é negativo');
  });
});