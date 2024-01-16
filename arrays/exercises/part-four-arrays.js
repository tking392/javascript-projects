let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);

//2) Print a slice of two elements from each array. Does slice alter the original arrays?

console.log(`Here's a slice of the first array:
    ${holdCabinet1.slice(2,4)}, 
and the second array: 
     ${holdCabinet2.slice(1,3)}`);

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?

// .reverse does as described and reverses the order of the items in the array
// .sort does the same as it does for strings and sorts the items in increasing order by the value of the items. 
// Both methods seem to alter the orignal array. 

console.log(holdCabinet1.reverse());
console.log(holdCabinet1);
console.log(holdCabinet2.sort());
console.log(holdCabinet2);

