const arr = ['AnanA','Arasu','Aruvi','Balaji','Babubab','Nagaraj'],
palindromarr = [];
let p,i=0;

// Arrow
for(var str of arr){
    p = ((str) => {
        let len = str.length,strl = str.toLowerCase();
    
        for(var i=0;i<len/2;i++){
                if(strl[i] !== strl[len-1-i])
                break;
                else if(i>=(len/2)-1){
                return str;//palindromarr.push(str);
                break;
                }
              
        }
    })(str);
    if(p !== undefined){
        palindromarr[i]=p;
        i++;
    }
    }
    console.log(palindromarr);