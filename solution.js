// Online Javascript Editor for free 
// Write, Edit and Run your Javascript code using JS Online Compiler 
const sortIntervals = (intervals) => intervals.sort((a, b) => a[0] > b[0]);

const mergeIntervals = intervals => {
  sortIntervals(intervals);
  const result = [];
  let previous = intervals[0];
  for (let i = 1; i < intervals.length; i += 1) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }
  result.push(previous);
  return result; 
};

console.log(mergeIntervals([[0, 3], [6, 10]]))
console.log(mergeIntervals([[0, 5], [3, 10]]))
console.log(mergeIntervals([[0, 5], [2, 4]])) 
console.log(mergeIntervals([[7, 8], [3, 6], [2, 4]])) 
console.log(mergeIntervals([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]))