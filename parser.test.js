const parse = require('./parser')

test('given --foo as input it produces a json object where foo is true', () => {
    expect(parse(['--foo'])).toEqual({foo : true})
})

test('given "--foo bar" as input it produces a json object where foo is bar', () => {
    expect(parse(['--foo', 'bar'])).toEqual({foo : "bar"})
})

test('given "--number 1" as input it produces a json object where number is 1', () => {
    expect(parse(['--number', '1'])).toEqual({number : 1})
})