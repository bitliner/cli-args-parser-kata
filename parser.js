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
    return (unparsedValue.match(/^[0-9]+$/)) ? parseInt(unparsedValue) : unparsedValue
}

module.exports = parse