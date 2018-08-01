parse = (inputs) => {
    let lastKey

    return inputs.reduce((acc, curr) => {
        if (isAKey(curr)) {
            lastKey = asKey(curr)
            if (!acc[lastKey]) {
                acc[lastKey] = true
            }
        } else {
            if (acc[lastKey] === true) {
                acc[lastKey] = asValue(curr)
            } else {
                acc[lastKey] = [].concat(acc[lastKey], asValue(curr))
            }
        }
        return acc
    }, {})
}

isAKey = (value) => {
    return value.match(/^--/)
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