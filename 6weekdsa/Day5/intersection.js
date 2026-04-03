// Given two integer arrays nums1 and nums2, return an array of their intersection.
//  Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

function intersection(nums1, nums2) {
  let intersection = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        intersection.push(nums1[i]);
      }
    }
  }
  return [...new Set(intersection)];
}

// console.log(intersection(nums1, nums2));

// using hash map
function hashMapApproach(nums1, nums2) {
  const map = new Map();
  const result = [];

  for (let num of nums1) {
    map.set(num, true);
  }

  for (let num of nums2) {
    if (map.has(num)) {
      result.push(num);
      map.delete(num);
    }
  }

  return result;
}

console.log(hashMapApproach(nums1, nums2));
