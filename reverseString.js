function reverse(str) {
    return str.split('').reverse().join('');
}

function reverse(str) {
    return str.split('').reduce((acc, curr) => {
        return [curr, ...acc]
    }).join('')
}

function reverse(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

function reverse(str) {
    if (str === '') {
        return '';
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverse('abc'))

