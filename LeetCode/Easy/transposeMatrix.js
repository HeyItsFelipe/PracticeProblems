/*

https://leetcode.com/problems/transpose-matrix/description/

Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]

Example 2:

Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]

Note:
1 <= A.length <= 1000
1 <= A[0].length <= 1000

*/

const transpose = A => {
  let result = [];
  for (let i = 0; i < A[0].length; i++) {
    result[i] = [];
    for (let j = 0; j < A.length; j++) {
      result[i][j] = A[j][i];
    }
  }
  return result;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));

/*
Time complexity of this function is quadratic time, O(n^2).
This is because we are using a nested for loop.
*/
