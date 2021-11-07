const map = (array, functions) => {
    function cube(array){
        return array.map(item => {return Math.pow(item, 3)});
    }

    if (array.length > 0) {
        if (functions === "cube") {
            return cube(array);
        }
    }
    return [];
}

module.exports = map;