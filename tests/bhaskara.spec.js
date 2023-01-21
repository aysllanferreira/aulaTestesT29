const bhaskara = require('../functions/bhaskara');

describe('Teste da função bhaskara', () => {
  it('Teste da funcao de Bhaskara', () => {
    expect(bhaskara).toBeDefined();
  })

  it('Testa se o delta eh negativo', () => {
    expect(bhaskara(2, 1, 2)).toBe('Delta é negativo')
  })

  it('Teste se a funcao retorna o valor esperado pelo return', () => {
    expect(bhaskara(1, 3, 2)).toStrictEqual([-1, -2])
  })

  it('Teste se a funcao retorna o valor esperado pelo return', () => {
    expect(bhaskara(1, 3, 2)).toEqual([-1, -2])
  })
});

// Tratando o retorno com array: use toEqual ou toStrictEqual