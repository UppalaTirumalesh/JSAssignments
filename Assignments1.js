//Finding Duplicate values in an array
var array = [1, 4, 8, 2, 4, 1, 6, 2, 9, 7];
function findDuplicates(arr) {
   return arr.filter((currentValue, currentIndex) =>
   arr.indexOf(currentValue) !== currentIndex);
}
console.log(findDuplicates(array));




//Sum of numbers in an array

/*const array = [1, 4, 0, 9, -3];
let sum = 0;
function sumArray(array) {
    
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  
  console.log(sumArray(array));


const array = [1, 4, 0, 9, -3];
let sum = 0;
  function sumArray(array) {
  
    forEach(item => {
      sum += item;
    });
  
    console.log(sum);
    return sum;
  }
  
  sumArray(sumArray(array));*/


const array2 = [1, 4, 0, 9, -3];
let sum = 0;
  function sumArray(arr) {
    for (const item of arr) {
      sum += item;
    }
    return sum;
  }
  console.log(sumArray(array2));




  //Reverse an array
  const items = [1, 2, 3, -9, 'Reversing an array', 5.8];
  items.reverse();
  console.log(items);




 //Remove spaces from a string
  function removeSpaces() {
    originalText = "Good programmers write code that humans can understand";
  
    removedSpacesText =
        originalText.split(" ").join("_");
  
    console.log(removedSpacesText);
}
removeSpaces();




//Find the Number of Vowels in a String
let str = "Hello World";
function getCount(str){
  var vowelsCount=0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log(getCount(str));




//Remove the first N elements from an Array
let n=5;
const arr = ['a', 'b', 'c', 'd', 1, 2, 3, 4];
const result = arr.splice(0, n);
console.log(result); 
console.log(arr);




//Convert Seconds to Hours Minutes Seconds
const seconds = 22600;
var date = new Date(null);
date.setSeconds(seconds);
var res = date.toISOString().substr(11, 8);
console.log(res);