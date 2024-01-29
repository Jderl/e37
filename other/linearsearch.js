
// Linear Searh Algorithm 
const data = [2,4,67,8,44,6,12,20,100,10];
function searchNumber(data, num){
    let attempt = 0; 
    for(let i = 0; i < data.length; i++){
        //checks if the data is equal to num 
       if(data[i] === num){
            return `${num} is locatted at index of ${i} with ${attempt + 1} attempts!`; 
       }
       attempt++;
    }
    // print attempts even if not found 
    return `${num} is not found with ${attempt}`;
}
console.log(searchNumber(data,20));

// a better version of searching
function searchNumberV2(data, num){
    let length = data.length; 
    let left = 0 ; 
    let right = length -1; 
    let index = -1; 

    while(left <= right){
        // check left side 
        if(data[left]=== num ){
            index=left;
            return` ${num} is found in left corner ${index} with ${left + 1} attemps! `;
        }
        // check right side 
        if(data[right]=== num ){
            index=right;
            return` ${num} is found in right corner ${index} with ${length - right} attemps! `;
        }

        left++;
        right--;
    }
    // returns the code if not found 
    if(index == -1){
        return`${num} is not found with ${left} attemps!`
    }
}

console.log(searchNumberV2(data, 4));

