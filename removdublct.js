const arr = [2,4,6,'d','d',6,7,4];
let len = arr.length,i=0;
arr.forEach(function(element){
        i++;
        for(j=i;j<len;j++){
        if(element===arr[j]){
        arr.splice(j,1);
        len = arr.length;
        continue;
        }
        else
        continue;
    }
       
});
console.log(arr);