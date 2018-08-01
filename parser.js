parse = (inputs) => {
    let object = {}
    if (inputs.length > 1) {
        object[asKey(inputs[0])] = asValue(inputs[1])
    } else {
        object[asKey(inputs[0])] = true
    }
    return object
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