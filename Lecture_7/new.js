function convertToInteger(str) {
    if((str[0]>='A' && str[0]<='Z') || (str[0]>='a' && str[0]<='z'))
        return NaN;
        else
          {
             var x=parseInt(str);
             let y=1;
             let sum=0;
               while(x>0)
               {
                 let rem=x%10;
                 sum +=rem*y;
                  y=y*2;
                  x=parseInt(x/10);
               }
               return sum;
          }
  }
  
  let ch=convertToInteger("10011");
  console.log(ch);