// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [3, 2, 4];
const target = 6;

// brute force
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
}

// console.log(twoSum(nums,target));

// two pointer
// the array shoul be sorted
function twoPointerApproach(nums, target) {
  sort = nums.sort((a, b) => a - b);

  let left = 0;
  let right = sort.length - 1;

  while (left < right) {
    let sum = sort[left] + sort[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

console.log(twoPointerApproach(nums, target));
