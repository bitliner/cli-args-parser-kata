const parse = require('./parser')

test('parse a simple flags', () => {
    expect(parse(['--foo'])).toEqual({foo : true})
})

test('parse a composite flags', () => {
    expect(parse(['--foo', 'bar'])).toEqual({foo : "bar"})
})

test('parse a composite flags with integer values', () => {
    expect(parse(['--number', '1'])).toEqual({number : 1})
})

test('parse multiple flags at once', () => {
    expect(parse(['--foo', '--bar', 'baz', '--number', '1'])).toEqual({"bar": "baz", "foo": true, "number": 1})
})

test('handle multiple values for the same flag', () => {
    expect(parse(['--foo', '--bar', 'baz', '--bar', 'zab', '--number', '1'])).toEqual({"bar": ["baz", "zab"], "foo": true, "number": 1})
})

test('support both string and array input formats', () => {
    expect(parse('--foo --bar baz --bar zab --number 1')).toEqual({"bar": ["baz", "zab"], "foo": true, "number": 1})
})