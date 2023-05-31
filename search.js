// indexOf, find, etc use LINEAR SEARCH
// LINEAR SEARCH is just looping through and finding matches

// BINARY SEARCH
// only works on sorted arrays, eliminate half off the array that doesn't meet the reqs
function binarySearch(arr, num) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (currentElement < num) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }

        console.log(num, arr[middle]);
        if (num === arr[middle]) {
            console.log('middle', middle);
            return middle;
        }
    }

    return -1;
}
function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}
