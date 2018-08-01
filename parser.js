const parse = (inputs) => {
    let lastKey

    return asArray(inputs).reduce((acc, curr) => {
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

const isAKey = (value) => {
    return value.match(/^--/)
}

const asKey = (inputWithLeadingMinus) => {
    return inputWithLeadingMinus.replace(/-/g, '')
}

const asValue = (unparsedValue) => {
    return isANumber(unparsedValue) ? parseInt(unparsedValue) : unparsedValue
}

const isANumber = (text) => {
    return text.match(/^[0-9]+$/)
}

const asArray = (inputs) => {
    return (Array.isArray(inputs)) ? inputs : inputs.split(" ")
}

module.exports = parse