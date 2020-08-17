/**
 *
 * @param {*} arr  array of distinct integers
 */
function thridLargest(arr) {
  if (arr.length < 3) {
    return "array must have atleast 3 elements";
  }
  //assume m1 as largest, m2,m3 min value
  let m1 = arr[0],
    m2 = Number.MIN_SAFE_INTEGER,
    m3 = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > m1) {
      //if greater than largest, swap others by 1 position
      m3 = m2;
      m2 = m1;
      m1 = arr[i];
    } else if (arr[i] > m2) {
      // if greater than second largest swap to m3
      m3 = m2;
      m2 = arr[i];
    } else if (arr[i] > m3) {
      // greater then 3rd largest, swap it only
      m3 = arr[i];
    }
  }
  return m3;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];
console.log(thridLargest(arr));
