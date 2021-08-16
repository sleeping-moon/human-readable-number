toReadable = function(a){
    while(a>0){
       c=a%10;
       let arr =new Array();
       switch (c) {
        case 1:
            numder= 'zero';
          break;
        case 1:
            numder= 'one' ;
          break;
        case 2:
            numder='two' ;
          break;
        case 3:
            numder='three' ;
        case 4:
            numder= 'four' ;
          break;
        case 5:
            numder='five' ;
          break;
        case 6:
            numder= 'six' ;
          break;
        case 7:
            numder= 'seven' ;
          break;
        case 8:
            numder= 'eight' ;
          break;
        case 9:
          numder= 'nine' ;
        default:
          alert( "Нет таких значений" );
        }
        arr.unshift(numder);
        a= a / 10;
        Math.trunc(a);
    }
    len= arr.length; 
    counter=0;
    while(0!=len){
      
      if(len == 3){
          stnum+= arr[counter] ;
          stnum+=' hundred';
          len =len -1;
          counter ++;
        }

        if(len == 2){ 

          if(arr[counter] != 1)
            switch (arr[counter]) {
            case 0:
              break;
            case 1:
                stnum+=' ten';
              break;
            case 2:
                numder= ' twenty' ;
              break;
            case 3:
                numder= ' thirty' ;
              break;
            case 4:
                numder= ' forty' ;
              break;
            case 5:
                numder= ' fifty' ;
              break;
            case 8:
                numder= ' eighty' ;
              break;
            default:
                stnum+= arr[counter];
                stnum+='ty'
            }

          if(arr[counter] == 1)
            switch (arr[counter]) {
            case 0:
                stnum+=' ten';
              break;
            case 1:
               numder= ' eleven' ;
              break;
            case 2:
              numder= ' twelve' ;
             break;
            case 3:
              numder= ' thirteen' ;
             break;
            case 5:
              numder= ' fifteen' ;
             break;
            case 8:
              numder= ' eighteen' ;
             break;
            default:
              stnum+= arr[counter];
              stnum+='teen'
            }
            len =len -1;
            counter ++;
        }

        stnum+= arr[counter];
        len =len -1;
    }
    return stnum;
}

