function findNumber(arr, k) {
    // Write your code here
let result = "No"; //create a variable result and assign it a string No

    //loop through the array using for loop
    for (let i = 0; i < arr.length; i++) {
    console.log("arr[i] = ", arr[i]); //log the elements in the array
    
        //if the element at position i is equal to k, assign the result the value yes which means that the number has been found
        if (arr[i] == k) {
        result = "Yes";
        } 
        //if the number has not been found, console.log 'not found yet'
        else {
        console.log("Not found yet");
        }
    }
    
//return the result
return result;
}
