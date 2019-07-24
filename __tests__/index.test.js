const { hello } = require('../index')

describe('hello world', () => {
  it('should work', () => {
    const result = hello()
    console.log('I logged something')
    expect(result).toBe('world')
  })
})
