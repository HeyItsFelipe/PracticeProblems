/*

https://leetcode.com/problems/judge-route-circle/description/

Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true

Example 2:
Input: "LL"
Output: false

*/

const judgeCircle = moves => {
  let vert = 0;
  let horiz = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') {
      ++vert;
    }
    if (moves[i] === 'D') {
      --vert;
    }
    if (moves[i] === 'L') {
      ++horiz;
    }
    if (moves[i] === 'R') {
      --horiz;
    }
  }
  return vert === 0 && horiz === 0;
};

console.log(judgeCircle('UD'));
console.log(judgeCircle('LL'));
console.log(judgeCircle('UR'));

/*
The string is iterated through once, O(n).
Calculations are constant time, O(1).
Therefore, the time complexity would be linear, O(n).
*/

