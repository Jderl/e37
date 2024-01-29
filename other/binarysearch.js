//Binary Search
const data = [2, 4, 6, 10, 11,12,20,30,100];

console.log(data.sort((a, b) => a - b));
// const data = [1,5,6]; 
    // create a binary search algorithm function
function binarySearch(data, num) {
    let length = data.length;
    let left = 0;
    let right = length - 1;
    let index;
    let attempt = 0; // Initialize attempt to 0

    while (left <= right) {
        // update the attempt counter
        attempt++;
        // create a middle pointer
        const middle = left + Math.floor((right - left) / 2);
        // if the num is equal to middle
        if (num == data[middle]) {
            index = middle;
            return `${num} is located at index ${index} with ${attempt} attempt/s`;
        }

        // update the left and right counters or indices
        if (num < data[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    // returns the code if not found
    return `${num} is not found with ${attempt} attempt/s!`;
}

console.log(binarySearch(data, 44));
console.log(binarySearch(data, 5));
console.log(binarySearch(data, 1000));
console.log(binarySearch(data, 1));