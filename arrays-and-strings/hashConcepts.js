// count no of pairs in an array of distinct elements where difference between two elements is k
// sample input [1,7,5,9,2,12,3], k=2
//sample output [1,3],[5,7],[7,9],[3,5]

const inputAr = [1, 7, 5, 9, 2, 12, 3];
const k = 2;

function countPairsWithDiffK(arr, k) {
  let hashObj = {};
  let count = 0;

  // insert everything in hash
  for (let i = 0; i < arr.length; i++) {
    hashObj[arr[i]] = true;
  }

  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    // if hash has x+k
    if (hashObj[x + k]) {
      count++;
    }
    // if hash has x-k
    if (hashObj[x - k] && x - k >= 0) {
      count++;
    }
    //remove visited entries
    hashObj[x] = false;
  }
  return count;
}

const count = countPairsWithDiffK(inputAr, k);

console.log(count);

//find entries between 1-1000 such that a3+b3=c3+d3

function findCubicPairs() {
  let hashPair = {};
  let resultsPair = {};
  //only two loops are sufficient instead of 4 as c3+c3 will also be covered.
  for (let a = 0; a < 1000; a++) {
    for (let b = a; b < 1000; b++) {
      const result = Math.pow(a, 3) + Math.pow(b, 3);
      if (!hashPair[result]) {
        hashPair[result] = [a, b];
      } else {
        hashPair[result] = [...hashPair[result], a, b];
        resultsPair[result] = hashPair[result];
      }
    }
  }

  return resultsPair;
}

console.log(findCubicPairs());
