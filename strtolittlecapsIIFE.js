const arr = ['ananth','arasu','aruvi','balaji','babu','nagaraj'],
strArr = [];
//IIFE
(function(){
    for(var ele of arr){
       let string = "";
    for(var i=0;i<ele.length;i++){
        if(i===0)
            string+=ele[i].toUpperCase();
        else
            string+=ele[i].toLowerCase();
    }
    strArr.push(string);
    }
})();
//anonymousfun();
console.log(strArr);
