function sameFrequency(num1, num2) {
    let str1 = num1.toString().split('');
    let str2 = num2.toString().split('');
    if (str1.length !== str2.length) {
        return false;
    }

    let arr1 = [];
    let arr2 = [];
    let sum1 = 0;
    let sum2 = 0;

    for (let s of str1) {
        let num = parseInt(s);
        arr1.push(num);
    }

    for (let s of str2) {
        let num = parseInt(s);
        arr2.push(num);
    }

    for (let num of arr1) {
        sum1 += num;
    }
    for (let num of arr2) {
        sum2 += num;
    }

    if (sum1 === sum2) {
        return true;
    } else {
        return false;
    }
}

function areThereDuplicates(...args) {
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;

    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}

function isSubsequence(substr, str) {
    // good luck. Add any arguments you deem necessary.

    // pointer a on substr
    // pointer b on str
    // increment a if == b
    // start from last position of b

    let a = 0;
    let b = 0;

    while (b < str.length - 1) {
        if (substr[a] === str[b]) {
            a++;
            b++;
            if (a === substr.length - 1) {
                return true;
            }
        } else {
            b++;
        }
    }
    return false;
}

function maxSubarraySum(arr, num) {
    if (arr.length < 3) {
        return null;
    }

    let tempSum = 0;
    let maxSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;
    // [100,200,300,400]
    //           i
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}

const minSubArrayLen = (arr, num) => {
    let subArrLength = arr.length;
};

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
