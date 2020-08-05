let arr = [10,80,30,90,40,50,70,45,62,86,79]

/**
 * 
 * @param {*} arr array to sortt
 * @param {*} l left index
 * @param {*} r right index
 */
function quickSort(arr=[],low=0,high=0){
    if(low<high){
        //index low < index high
        const pivot = partition(arr,low,high)
        quickSort(arr,pivot+1,high) //sort left arra
        quickSort(arr,low, pivot-1)//sort right array  
    } 
}

function partition(arr=[],low=0,high=0){
let i= low-1
let pivot= arr[high]

for(let j=low;j<=arr[high-1];j++){
    if(arr[j]<pivot){
        i++
//swap(arr[i],arr[j])
//swap
let k=arr[i]
arr[i]=arr[j]
arr[j]=k
}
}
    //finally swap pivot , that ie, arrr[high] with arr[i+1]
    //swap(arr[high],arr[i+1])
    let k=arr[high]
arr[high]=arr[i+1]
arr[i+1]=k
    return i+1
}

function swap(a,b){
    let k=a;
    a=b;
    b=k
}
quickSort(arr,0, arr.length-1)

console.log(arr)