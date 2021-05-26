async function removeDuplicates(arr) {
    let temp = [];
    let j = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if(uniqe(arr[i],i, arr)){
            temp.push(arr[i]);
        }
    }
     return temp;   
}
function uniqe(num, loc, arr){
    for (let i = loc+1; i < arr.length; i++) {
        if (arr[i] === num) {
            return false
        }        
    }
    return true;
}
Array.prototype.removeDuplicatesAsync = async function() {
    let arr = this;
    let result = await removeDuplicates(arr);
    console.log(result);
}
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);
