const arr = [1,2,3,47,5,65,7,7,8];
let sum =0;
//IIFE
for(var no of arr){
(function(no){sum += no})(no);}
console.log("sum of array numbers is:",sum);