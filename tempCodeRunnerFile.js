function mergeSortedArrays(arr1, arr2) {
    let sortedArray = [];
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