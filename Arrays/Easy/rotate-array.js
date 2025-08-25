// https://leetcode.com/problems/rotate-array/description/
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const problemDescription = `
<h3>Rotate Array</h3>
<p>
<b>Input:</b> nums = [1,2,3,4,5,6,7], k = 3 <br>
<b>Output:</b> [5,6,7,1,2,3,4] <br>
<b>Explanation:</b><br>
rotate 1 step to the right: [7,1,2,3,4,5,6]<br>
rotate 2 steps to the right: [6,7,1,2,3,4,5]<br>
rotate 3 steps to the right: [5,6,7,1,2,3,4]
</p>
`;

function rotate(arr, k){
    k = k % arr.length;

    let i = 0;
    let j = arr.length - 1;
    // reverse whole array
    while(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    // reverse first k
    i = 0;
    j = k - 1;
    while(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    // reverse remaining part
    i = k;
    j = arr.length - 1;
    while(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    return arr;
}

let arr =  [1,2,3,4,5,6,7]
let k = 3;

console.log(rotate(arr, k))

try {
  const problemDiv = document.querySelector('.problem');
  problemDiv.innerHTML = problemDescription;

  // Create input elements
  const arrayInput = document.createElement('input');
  arrayInput.type = 'text';
  arrayInput.placeholder = 'Enter array (comma separated)';
  arrayInput.style.marginRight = '10px';

  const kInput = document.createElement('input');
  kInput.type = 'number';
  kInput.placeholder = 'Enter k';
  kInput.style.marginRight = '10px';

  const runButton = document.createElement('button');
  runButton.textContent = 'Rotate Array';

  const outputDiv = document.createElement('div');
  outputDiv.style.marginTop = '10px';

  // Append inputs and button
  problemDiv.append(arrayInput, kInput, runButton, outputDiv);
  
  document.querySelector('button').addEventListener('click', function(e){
    const [input1, input2] = document.querySelectorAll('input');
    
    // fix: parse array input more flexibly
    let arr = input1.value
      .replace(/\[|\]/g, '')   // remove brackets if present
      .split(',')
      .map(n => Number(n.trim()))
      .filter(n => !isNaN(n));
    
    let k = Number(input2.value);

    // fix: update only outputDiv, not problemDiv
    outputDiv.innerHTML = `<p>Solution: Rotated Array => [${rotate(arr, k).join(', ')}]</p>`;
  })
} catch(e) {
  console.log("running on node", rotate(arr, k));
}
