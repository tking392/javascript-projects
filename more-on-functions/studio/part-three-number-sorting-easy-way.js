//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

function sortNumsAsc(nums) {
    return nums.sort(function(a, b){return a - b});
    
}

// Tests
console.log(`

     Ascending Order Tests
-------------------------------
Nums1 = ${sortNumsAsc(nums1)}
Nums2 = ${sortNumsAsc(nums2)}
Nums3 = ${sortNumsAsc(nums3)}
-------------------------------`)
//Sort each array in decending order.

function sortNumsDec(nums) {
    return nums.sort(function(a, b){return b - a});
}

// Tests

console.log(`

     Decending Order Tests
-------------------------------
Nums1 = ${sortNumsDec(nums1)}
Nums2 = ${sortNumsDec(nums2)}
Nums3 = ${sortNumsDec(nums3)}
-------------------------------`)