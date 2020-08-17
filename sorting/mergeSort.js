let arr = [10, 80, 30,67,34,9,45,97,28];
//TODO
/**
 *
 * @param {*} arr array to sortt
 * @param {*} l left index
 * @param {*} r right index
 */
function mergeSort(arr = [], l = 0, r = 0) {

  if (l < r) {
    const m = (l +r) / 2;
    // now sort the two halfs
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }

}
/**
 *
 * @param {*} arr array to sort
 * @param {*} l left index
 * @param {*} m medium index
 * @param {*} r right index
 */
function merge(arr, l, m, r) {
// arrays to store left and right arrays,orted array
let leftArr=[],rightArr=[]
//init index of each array
let i=0,j=0

let k=1

const n1= m-l+1
const n2= r-m
for(let i=0;i<n1;++i){
    leftArr[i]=arr[i+l]
}
for(let i=0;i<n2;++i){
    rightArr[i]=arr[i+m+1]
}

while(i<n1 && j<n2){
    if(leftArr[i]<=rightArr[j])
    arr[k++]=leftArr[i++]
    else 
    arr[k++]=rightArr[j++]
}


while(i<n1){
    arr[k++]=leftArr[i++]
}
while(i<n2){
arr[k++]=rightArr[j++]
}
}

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
