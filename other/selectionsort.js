// Sorting Algorithm
// const data = [2, 4, 6, 10, 11, 12, 20, 30, 100];
// const data = [12, 45, 196, 18, 500, 11, 122, 20, 30, 100];


const data = [2,4,67,8,44,6,12,20,100,10];
// Arrow function
const selectionSort = (data) => {
    const length = data.length;
    //create swap function
    const swap= (data,minIndex, index)=>{
        ([data[minIndex], data[index]]=[data[index],data[minIndex]]);
    }

    for (let index = 0; index < length; index++) {
        // var that holds initial index and changes after iteration
        let minIndex = index;
        // looping for each
        for (let cIndex = index + 1; cIndex < length; cIndex++) {
            // changing the index of minIndex with the cindex which contains smaller value
            if (data[cIndex] < data[minIndex]) {
                minIndex = cIndex;
            }
        }
        if (minIndex !== index) {
            // create swapping method
            // const temp = data[minIndex]; // contains the value of data[minIndex]
            // data[minIndex] = data[index]; // contains the value of data[index]
            // data[index] = temp; // emptied
            swap(data,minIndex, index);
        }
    }
    return data;
}

console.log(selectionSort(data)); 

/*
const data = [2, 4, 67, 8, 44, 6, 12, 20, 100, 10];

const selectionSort = (data) => {
    const length = data.length;

    for (let index = 0; index < length; index++) {
        let minIndex = index;

        for (let cIndex = index + 1; cIndex < length; cIndex++) {
            if (data[cIndex] < data[minIndex]) {
                minIndex = cIndex;
            }
        }

        if (minIndex !== index) {
            // Swapping method with console logs
            console.log(`Swapping ${data[index]} and ${data[minIndex]}`);
            
            const temp = data[minIndex];
            data[minIndex] = data[index];
            data[index] = temp;

            console.log(`Result: [${data.join(', ')}]\n`);
        }
    }

    return data;
}

console.log(`Original Data: [${data.join(', ')}]\n`);
console.log(`Sorted Data: [${selectionSort(data).join(', ')}]`); */

