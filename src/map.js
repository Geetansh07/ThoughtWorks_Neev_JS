const map = (array, functions) => {
    function cube(array){
        return array.map(item => {return Math.pow(item, 3)});
    }
    function identity(array){
        return array.map(item => {return (item * 1)});
    }

    if (array.length > 0) {
        if (functions === "cube") {
            return cube(array);
        }
        if (functions == "identity") {
            return identity(array);
        }
    }
    return [];
}

module.exports = map;