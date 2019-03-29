function mergeSortedArrays(arr1, arr2) {
    let sortedArray = [];

    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            sortedArray.push(arr1.shift());
        } else {
            sortedArray.push(arr2.shift());
        }
    }
    return [...sortedArray, ...arr1, ...arr2];
}

console.log(mergeSortedArrays([0, 3, 4, 31] , [4, 6, 30]))