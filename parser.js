parse = (inputs) => {
    let object = {}
    if (inputs.length > 1) {
        object[asKey(inputs[0])] = inputs[1]
    } else {
        object[asKey(inputs[0])] = true
    }
    return object
}

asKey = (inputWithLeadingMinus) => {
    return inputWithLeadingMinus.replace(/-/g, '')
}

module.exports = parse