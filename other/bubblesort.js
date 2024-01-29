/*
//Bubble Sort 
const data = [12,45,198,18,500,11,122,20,30,100];
// const data = [12,45,198,18,500];
// Arrow function
const bubbleSort = (data) => {
    const length = data.length;
    let attempt = 0;
    //create swap function
    const swap= (data,left, right)=>{
        ([data[left], data[right]]=[data[right],data[left]]);
        //data left 196 
        //data right 18 
        //after the assignment operator
        //data left container = 18
        //data right container = 196
    }

    //looping for selecting element 
    for (let index = 0; index < length; index++) {
      
        // looping for each
        // If the 
        // for (let cIndex = 0; cIndex < length -1-index; cIndex++)
        for (let cIndex = 0; cIndex < length; cIndex++){
            attempt++;
            // Conditional if the left value(min) is greater than right (max)
            if (data[cIndex] > data[cIndex+1]) {
                swap(data, cIndex, cIndex+1);
                console.log(data);
            }
        }
    }
    console.log(attempt);
}

console.log(bubbleSort(data)); */



// Bubble Sort
const data = [12, 45, 198, 18, 500, 11, 122, 20, 30, 100];

// Arrow function
const bubbleSort = (data) => {
  const length = data.length;
  let attempt = 0;

  // Create swap function
  const swap = (data, minIndex, maxIndex) => {
    ([data[minIndex], data[maxIndex]] = [data[maxIndex], data[minIndex]]);
  };

  console.log(`Original Data: ${data}`);

  // Looping for selecting element
  for (let index = 0; index < length; index++) {
    console.log(`\nPass ${index + 1}:`);
    // Looping for each
    for (let cIndex = 0; cIndex < length; cIndex++) {
      attempt++;
      console.log(`  Comparison ${attempt}: ${data[cIndex]} > ${data[cIndex + 1]}?`);
      // Conditional if the left value (min) is greater than right (max)
      if (data[cIndex] > data[cIndex + 1]) {
        swap(data, cIndex, cIndex + 1);
        console.log(`    Swapped: ${data}`);
      }
    }
  }

  console.log(`\nSorted Data: ${data}`);
  console.log(`Total comparisons and swaps: ${attempt}`);
};

bubbleSort(data);

