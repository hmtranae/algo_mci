// Given array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// Returns 2

// Given array = [2, 3, 4, 5];
// Returns undefined

function firstRepeatingChar(array) {
    let hashTable = {};
    for (let num of array) {
        if (hashTable[num]) {
            return num;
        } else {
            hashTable[num] = true
        }
    }
    return undefined;
}

let array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
let array2 = [2, 3, 4, 5];

// Time complexity O(n)
// Space complexity O(n)

// For a nested for loop Time complexity O(n^2) Space Complexity O(1)

console.log(firstRepeatingChar(array));
console.log(firstRepeatingChar(array2));