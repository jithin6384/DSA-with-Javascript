'use strict';

// Problem Description

// Given an array, arr[] of size N, the task is to find the count of array indices 
// such that removing an element from these indices makes the sum 
// of even-indexed and odd-indexed array elements equal.

//input  A = [2, 1, 6, 4]
//output = 1 
//Explanation
// remove the index one and the array becomes [2,6,4] 
// even sum = 2 + 4 = 6 and oddSum = 6 
function specialIdx(A){

          let prefixArr = [];
   let evenSum = 0;
   let oddSum = 0;
   let indexCount = 0
   for(let i = 0; i < A.length; i++){
    if(i == 0){
      evenSum = A[i];
      prefixArr[i] = evenSum;
      
    }else{
      if(i % 2 != 0){
         oddSum += A[i];
         prefixArr[i] = oddSum;
      }else{
         evenSum += A[i];
         prefixArr[i] = evenSum;
      }
    }
    

   }

    for(let i = 0; i < prefixArr.length; i++){
    if(i == 0){
       if((evenSum - prefixArr[i]) == oddSum) {
         indexCount = indexCount + 1;
       } 
    }else{

      let curevenSum = 0;
      let curoddSum = 0;
      let prev =  prefixArr[i -2] ? prefixArr[i -2] : 0;
      if(i % 2  != 0){//for odd index
        curevenSum =  prev + (evenSum - prefixArr[i - 1]);
        curoddSum = prefixArr[i -1]  + (oddSum  - prefixArr[i])// + remaining odd sum because odd has become even 
      
      }else{
        curevenSum = prev + (oddSum - prefixArr[i - 1]);
        curoddSum = prefixArr[i -1] + (evenSum - prefixArr[i] )
      }
      if(curoddSum == curevenSum){
        indexCount = indexCount + 1
      }
    }
   }

   return indexCount;
	
}

let A  = [4, 1, 3, 2, 6, 2, 3, 1];

specialIdx(A);