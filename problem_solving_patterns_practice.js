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
    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = 9999;

    while (start < arr.length) {
        // initialize window
        if (total < num && end < arr.length) {
            // move the window right
            total += arr[end];
            end++;
        } else if (total >= num) {
            // window size is the diff between left and right edges of the window
            let diff = end - start;
            // reassign window size here
            if (minLength > diff) {
                minLength = diff;
            }
            // shrink window from the left
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }
    // if unchanged, no match
    return minLength === 9999 ? 0 : minLength;
};

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            // start = largest between start + seen[char]
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}