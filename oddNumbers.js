function oddNumbers(l, r) {
    // Write your code here
    let result = []; //create an array to store the odd numbers
    
        //loop through all the numbers between l and r
        for (let i = l; i <= r; i++) {
            //if a number is odd, console.log it and push it to the result array
            if (i%2 == 1) {
            //console.log(i, " = Odd");
            console.log(i);
            result.push(i);
            } else {
            //console.log(i, " = Even");
            }
        }
     //return the result array
    return result;
}
