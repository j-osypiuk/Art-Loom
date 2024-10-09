const formatTextInputs = (inputs) => {
    let result = {}
    inputs.map(input => result[input.name] = input.value);
    return result;
}

export { formatTextInputs };