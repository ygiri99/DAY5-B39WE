const arr = ['ananth','arasu','aruvi','balaji','babu','nagaraj'],
strArr = [];
// Arrow 
arr.forEach((str) =>{
    let string = "";
    for(var i=0;i<str.length;i++){
        if(i===0)
            string+=str[i].toUpperCase();
        else
            string+=str[i].toLowerCase();
    }
    strArr.push(string);
});
console.log(strArr);
