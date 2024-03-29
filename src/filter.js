const filter = (array, functions) => {

    if (array.length === 0){
        return []
    }
    if (functions === "filterUpperCase") {
        const new_filtered_upper_case_array = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 'A' && array[i] <= 'Z') {
                new_filtered_upper_case_array.push(array[i])
            }
        }
        return new_filtered_upper_case_array;
    }
    else{
        const new_filtered_array = [];
        for (let i = 0; i < array.length; i++) {
            const item_in_array = array[i];
            const does_item_satisfy_the_condition = functions(item_in_array, i);

            if (does_item_satisfy_the_condition) {
                new_filtered_array.push(item_in_array);
            }
        }
        return new_filtered_array;
    }
}

module.exports = filter;