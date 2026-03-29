// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

nums = [1, 2, 3, 1];

// brute force approach
function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        console.log(nums[i], nums[j]);

        return true;
      }
    }
  }

  return false;
}

// console.log(containsDuplicate(nums));

function twoPointerApproach(nums) {
  nums.sort((a, b) => a - b);

  let i = nums.length;

  while (i >= 0) {
    console.log(i);
    if (nums[i] === nums[i - 1]) {
      return true;
    }
    i--;
  }

  return false;
}

console.log(twoPointerApproach(nums));
