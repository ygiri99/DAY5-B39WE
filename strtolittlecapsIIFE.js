const arr = ['Ananth','Arasu','Aruvi','Balaji','Babu','Nagaraj'],
strArr = [];
//IIFE
(function(){
    for(var ele of arr){
        strArr.push(ele.toLowerCase());
    }
})();
//anonymousfun();
console.log(strArr);