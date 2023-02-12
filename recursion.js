// 1. simplest case -> this will be your base case
// 2. examples, visualize
// 3. relate hard cases to simple cases
// 4. combine the recursive pattern with your base case

function fib(n) {
    if (n <= 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

function productOfArray(arr) {
    if (arr.length === 1) return arr[0];

    return arr[0] * productOfArray(arr.slice(1));
}

function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

function flatten(oldArr) {
    let newArr = [];
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}

function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
}

function someRecursive(arr, callback) {
    if (arr.length === 0) {
        return false;
    }
    if (callback(arr[0]) === true) {
        return true;
    }
    return someRecursive(arr.splice(1), callback);
}
function capitalizeFirst(arr) {
    const uppercased = [];

    function helper(input) {
        if (input.length === 0) {
            return;
        }
        let first = input[0][0];
        uppercased.push(first.toUpperCase() + input[0].slice(1));
        return helper(input.splice(1));
    }
    helper(arr);
    return uppercased;
}

capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']
