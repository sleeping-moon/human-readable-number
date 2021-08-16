toReadable = function(a){
    let arr =new Array();
    while(a>0){
       let c=a%10;
      
       switch (c) {
        case 0:
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
        var a= a / 10;
        Math.trunc(a);
    }
    let len= arr.length; 
    let counter=0;
    let stnum;
    while(0!=len){
      if(len == 3){
          stnum+= arr[counter] ;
          stnum+=' hundred';
          len =len -1;
          counter ++;
        }

        if(len == 2){ 

          if(arr[counter] != 'one')
            switch (arr[counter]) {
            case 'zero':
              break;
            case 'one':
                stnum+=' ten';
              break;
            case 'two':
                stnum+= ' twenty' ;
              break;
            case 'three':
                stnum+= ' thirty' ;
              break;
            case 'four':
                stnum+= ' forty' ;
              break;
            case 'five':
                stnum+= ' fifty' ;
              break;
            case 'eight':
                stnum+= ' eighty' ;
              break;
            default:
                stnum+= arr[counter];
                stnum+='ty'
            }

          if(arr[counter] == 'one')
            switch (arr[counter]) {
            case 'zero':
                stnum+=' ten';
              break;
            case 'one':
                stnum+= ' eleven' ;
              break;
            case 'two':
                stnum+= ' twelve' ;
             break;
            case 'three':
                stnum+= ' thirteen' ;
             break;
            case 'five':
                stnum+= ' fifteen' ;
             break;
            case 'eight':
                stnum+= ' eighteen' ;
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

console.log(toReadable(56));