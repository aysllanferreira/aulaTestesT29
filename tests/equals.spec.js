const equals = require('../functions/equals');

describe('Teste da função equals', () => {
  it('Funcao equals esta definida', () => {
    expect(equals).toBeDefined();
  })

  it('Verifica se passados parametros identicos, o retorno da funcao retornara True', () => {
    expect(equals(3, 3)).toBe(true);
  })

  it('Verifica se passados parametros nao identicos, o retorno da funcao retornara False', () => {
    expect(equals(3, 4)).toBe(false);
  })
});

