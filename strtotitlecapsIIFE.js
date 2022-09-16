const arr = ['Ananth','Arasu','Aruvi','Balaji','Babu','Nagaraj'],
strArr = [];
//IIFE
(function(){
    for(var ele of arr){
        strArr.push(ele.toUpperCase());
    }
})();
//anonymousfun();
console.log(strArr);