

// Q1. Special Subsequences "AG"
// Solved
// feature icon
// Using hints except Complete Solution is Penalty free now
// Use Hint
// Problem Description

// You have given a string A having Uppercase English letters.

// You have to find how many times subsequence "AG" is there in the given string.

// NOTE: Return the answer modulo 109 + 7 as the answer can be very large.


// Example Input

// Input 1:

//  A = "ABCGAG"


function specialSubsequences(A){
    const MOD = 1_000_000_007;
    let cur  = 0;
    let pair = 0;
    for(let i = 0; i < A.length; i++){

       if(A[i] == 'A'){
          cur = (cur + 1) % MOD;
       }

       if(A[i] == 'G'){
        pair = (pair + cur) % MOD;
       }
    }
   
    return pair

}

let input = "ABCGAG"

specialSubsequences("ABCGAG");


// Problem Description

// Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

// and at least one occurrence of the minimum value of the array.

// Example Input

// Input 1:

// A = [1, 3, 2]
// Input 2:

// A = [2, 6, 1, 6, 9]


// Example Output

// Output 1:

//  2
// Output 2:

//  3

function minMax(A){
   let minEl = A[0];
   let maxEl = A[0];
   let maxIdx;
   let minIdx;
   let minDistance = Number.POSITIVE_INFINITY;

   for(let i = 1; i < A.length; i++){
      if(A[i] > maxEl){
        maxEl = A[i]
      }

      if(A[i] < minEl){
        minEl = A[i]
      }
   }
//    console.log(minEl);
//    console.log(maxEl);
   for(let i = 0; i < A.length; i++){
     
      if(A[i] == minEl){
        
        minIdx = i;
        if(maxIdx || maxIdx == 0){
            minDistance = Math.min(minDistance, Math.abs(minIdx - maxIdx))
        }
      }

      if(A[i] == maxEl){
        maxIdx = i;
        
        if(minIdx || minIdx == 0){
            minDistance = Math.min(minDistance, Math.abs(minIdx - maxIdx))
        }
      }
   }
   return minDistance + 1;
}

minMax([2, 6, 1, 6, 9])

//bulbs

// Problem Description

// A wire connects N light bulbs.


// Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.

// Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.

// You can press the same switch multiple times.

// Note: 0 represents the bulb is off and 1 represents the bulb is on



 function minimumSwitch(A){
    let count = 0;
    let switchBulb = false;
     
    for(let i = 0; i < A.length; i++){
        // debugger;
        if(A[i] == 0){
            if(!switchBulb){
                count++;
               switchBulb = true;
            }
           
        }

        if(A[i] == 1){
            if(switchBulb){
                count++;
                switchBulb = false;
            }
        }
    }

    return count;

 }

 let A = [0, 1, 0, 1];
   minimumSwitch(A);
 