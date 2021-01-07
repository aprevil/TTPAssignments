
//functions and array used in multiple examples
let arr = [1,2,3,4];
const add2 = (arr) => arr+2;
const over10 = (num) => {if(num>10) return true;}

//my for each
function myEach(arr, cb){
    let arr2 = [];
    for(let i = 0; i<arr.length;i++){
        cb((arr[i]));
    }
}  
myEach(arr,console.log);

//my map
function myMap(arr, cb){
    let arr2 = [];
    for(let i = 0; i<arr.length;i++){
        arr2[i] = cb(arr[i]);
    }
    
    return arr2;
}

let newArr = myMap(arr,add2);
console.log(newArr);

//my filter
function myFilter(arr,cb){
    let arr2 = [];
    for(let i = 0; i<arr.length;i++){
        if(cb(arr[i])) arr2.push(arr[i]);
    }
    return arr2;
}

let arr3 = [10,5,15,6,7,20,25,3,60];
let newArr2 = myFilter(arr3,over10);
console.log(newArr2);

//my Some
function mySome(arr,cb){
    let start = 0;
    do{
        if(cb(arr[start])) return true;
        start++;
    }while(start<arr.length);

    return false;
}
console.log(mySome(arr,over10));

//my every
function myEvery(arr,cb){
    for(let i = 0; i<arr.length;i++){
        if(!cb(arr[i])) return false;
    }
    return true;
}
console.log(myEvery(newArr2,over10));

//my reduce
reduce = (num, val) => num + val;
function myReduce(arr, cb){
    let total = 0;
    for(let i = 0; i<arr.length;i++){
        total = cb(arr[i], total);
    }
    return total; 
}
console.log(myReduce(arr,reduce));

//my includes
function myIncludes(arr, num){
    let set = new Set();
    for(element of arr)set.add(element);
    
    if(set.has(num)) return true;
    return false;
}
console.log(myIncludes([2,4,5],4));

//my index of
function myIndexOf(arr,target){
    for(index in arr){
        if(target === arr[index]) return index;

    }
    return -1;
}
console.log(myIndexOf([1,2,3,4,5],5));

//my push
function myPush(arr,elementToAdd){
    arr[arr.length] = elementToAdd;
    
}
let pushedArray = [1,2,3,4];
myPush(pushedArray,6);
console.log(pushedArray);

//my last index of
function myUnshift(arr,targetElement){
    for(let i = arr.length-1;i>=0;i--){
        if(arr[i] === targetElement) return i;
    }
    return -1;
}
console.log(myUnshift([1,2,3,3,5,6],3));

//my object keys
function grabKeys(ob){
    let arr=[];
    for(element in ob) arr.push(element);

    return arr;
}
let obj ={k:7,a:5,tree:3};
console.log(grabKeys(obj));

//my object values
function grabValues(ob){
    let arr=[];
    for(element in ob) arr.push(ob[element]);
    
    return arr;
}
console.log(grabValues(obj));
