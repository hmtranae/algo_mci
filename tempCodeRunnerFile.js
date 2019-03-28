console.log(hasPairWithSum2([1, 2, 3, 9], 8));
console.log(hasPairWithSum2([1, 2, 4, 3], 8));

// better solution
function hasPairWithSum2(arr, sum) {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(sum - arr[i])
        } else if (set.has(arr[i])) {
            return true;
        }
    }
    return false;
}