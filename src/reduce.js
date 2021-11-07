const reduce = (array, functions, initialValue) => {
    if (array.length === 0 && !initialValue){
        return [];
    }
    if (array.length === 0 && initialValue){
        return initialValue;
    }
    let newInitialValue = initialValue || array[0]; 
    let startCount = initialValue ? 0 : 1;
    for (let i = startCount; i < array.length; i++) {
        const el = array[i];
        newInitialValue = functions(newInitialValue, el, i);
    }
    return newInitialValue;
}

module.exports = reduce;
