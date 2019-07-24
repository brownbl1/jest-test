const { hello } = require('../index')

describe('hello world 2', () => {
  it('should work', () => {
    const result = hello()
    console.log('I logged something too')
    expect(result).toBe('world')
  })
})
