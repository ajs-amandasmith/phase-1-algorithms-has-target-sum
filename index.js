function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // console.log(i, j);
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Add your pseudocode here
  function (array, number)
    iterate over the array, starting at the 0 index (i)
      iterate over the array, starting at the 1 index (j)
        if i + j === number
        return true
    return false
*/

/*
  Add written explanation of your solution here
  Write a function (hasTargetSum) that takes in two items, an array and a number
  The function returns true if any pair of the numbers in the array equals the number
  Otherwise, it returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log('Expecting: false');
  console.log("=>", hasTargetSum([], 2));
}

module.exports = hasTargetSum;
