const parse = require('./parser')

test('given --foo as input it produces a json object where foo is true', () => {
    expect(parse(['--foo'])).toEqual({foo : true})
})
