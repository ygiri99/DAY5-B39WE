const arr = ['Ananth','ARasu','Aruvi','Balaji','baBu','nagarRAJ'];
strArr = [];
//IIFE
(function(){
    for(var ele of arr){
        strArr.push(ele.toLowerCase());
    }
})();
//anonymousfun();
console.log(strArr);
