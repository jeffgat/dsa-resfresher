const frequencyCounter = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let val of arr1) {
        // this will count frequency of each element in arr1
        obj1[val] = (obj1[val] || 0) + 1;
    }

    for (let val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1;
    }

    for (let key in obj1) {
        if (!(key ** 2 in obj2)) return false;
        if (obj2[key ** 2] !== obj1[key]) return false;
    }

    return true;
};

const multiplePointers = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === num) return true;
        else if (sum > num) right--;
        else left++;
    }

    return false;
};

slidingWindow([2,6,9,2,1,8], 3)
const slidingWindow = (arr, num) => {
    let max = 0;
    let temp = 0;

    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        max += arr[i];
    }

    temp = max;

    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i];
        max = Math.max(max, temp);
    }

    return max;
};

const divideAndConquer = (arr, num) => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (currentElement < num) min = middle + 1;
        else if (currentElement > num) max = middle - 1;
        else return middle;
    }

    return -1;
};

const test = (substr, str) => {
    // add whatever parameters you deem necessary - good luck!
    let a = 0;
    let b = 0;

    while (b < str.length - 1) {
        // what's my ending case?
        if (substr[a] === str[b]) {
            a++;
            b++;
            if (a === substr.length - 1) {
                return true;
            }
        } else {
            b++;
        }
        // console.log('a', substr[a]);
        // console.log('b', str[b]);
    }
    return false;
};

test('sing', 'sting');
