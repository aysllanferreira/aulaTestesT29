const createEmail = require('../functions/emailCreator');

describe('Teste da função createEmail', () => {
  it('Teste se a função createEmail é definida', () => {
    expect(createEmail).toBeDefined();
  });

  it('Teste se a função createEmail retorna o email no formato correto', () => {
    expect(createEmail('Joao', 'Silva')).toBe('joao_silva@aulao.com');
  });
});