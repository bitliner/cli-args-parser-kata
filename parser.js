let lastKey;
parse = (inputs) => {
    return inputs.reduce((acc, curr) => {
        if (curr.match(/^--/)) {
            lastKey = asKey(curr)
            acc[lastKey] = true
        } else {
            acc[lastKey] = asValue(curr)
        }
        return acc
    }, {})
}

asKey = (inputWithLeadingMinus) => {
    return inputWithLeadingMinus.replace(/-/g, '')
}

asValue = (unparsedValue) => {
    return isANumber(unparsedValue) ? parseInt(unparsedValue) : unparsedValue
}

isANumber = (text) => {
    return text.match(/^[0-9]+$/)
}

module.exports = parse