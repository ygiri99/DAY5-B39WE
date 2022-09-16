const arr = [1,2,3,4,5,6,7,8];
let k = 5;
len = arr.length;
(function(k){for(var i=0;i<k;i++){
    let a1 = arr[0];
    for(var j=0;j<len;j++){
        if(j===len-1){
            arr[j] = a1;
        }
        else
        arr[j]=arr[j+1];
    }
}
})(k);
console.log(arr);