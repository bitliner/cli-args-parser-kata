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

test('given "--foo --bar baz --number 1" as input it produces a json with more than one element', () => {
    expect(parse(['--foo', '--bar', 'baz', '--number', '1'])).toEqual({"bar": "baz", "foo": true, "number": 1})
})

test('given "--foo --bar baz --bar zab --number 1" as input it produces a json object with an array', () => {
    expect(parse(['--foo', '--bar', 'baz', '--bar', 'zab', '--number', '1'])).toEqual({"bar": ["baz", "zab"], "foo": true, "number": 1})
})

test('input as string', () => {
    expect(parse('--foo --bar baz --bar zab --number 1')).toEqual({"bar": ["baz", "zab"], "foo": true, "number": 1})
})