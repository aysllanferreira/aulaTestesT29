const createEmail = require('../functions/emailCreator');

describe('Teste da função createEmail', () => {
  it('Testa se a funcao createEmail foi definida', () => {
    expect(createEmail).toBeDefined();
  })

  test('Testar se o retorno da funcao esta correto', () => {
    expect(createEmail('Aysllan', 'Ferreira')).toBe('aysllan_ferreira@aulao.com')
  })
});