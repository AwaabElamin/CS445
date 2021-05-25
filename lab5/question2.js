Array.prototype.removeDuplicates = function () {
    var temp = [];
    var j = 0;
    for (let i = 0; i < this.length - 1; i++) {
        if(uniqe(this[i],i, this)){
            temp.push(this[i]);
        }
    }
     console.log(temp);   
}
function uniqe(num, loc, arr){
    for (let i = loc+1; i < arr.length; i++) {
        if (arr[i] === num) {
            return false
        }        
    }
    return true;
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates(); 
console.log(`end`);

