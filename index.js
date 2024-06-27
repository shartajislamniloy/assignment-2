// Problem 1
function calculateSum(x,y){
let sum = x + y;
return sum;
}
const a = calculateSum(3,6);
console.log("sum is:", a)
// Problem 2
function isEven(num){
if((num%2) === 0){
    return true
}
else{
    return false
}
}
const a1 = isEven(3)
console.log(a1)

//problem 3
function findMax(newArray){
   
    var largest = newArray[0];
    for(var i=1; i<newArray.length; i++){
        if(newArray[i]>largest){
            largest = newArray[i];
        }
       
    }
    return largest;
    }
    var array1 = [2,5,7,44,30,23,43,90,24];
    var aa =findMax(array1);
    console.log("largest number is:",aa);

    //problem 4
    function reverseString(string){
      const x = string.split('')
      const x1 = x.reverse();
      const x2 = x1.join('');
      return x2;
    //   console.log(x.length)
    //   let xx = [];
    //   for(i=4; i>=0; i--){
    //         xx.push(x[i])
    //   }
    //   const xx1= xx.toString();
    //   return xx1
      
    }
    const string = 'Shartaj Islam';
    const reverse = reverseString(string);
    console.log(reverse)

    //Problem 5
    function filterOddNumbers(array){
      const newArr = [];
      for(i=0; i<array.length; i++){
        if((array[i]%2) != 0){
            newArr.push(array[i])
        }
      }
      return newArr
    }
    const w = [2,3,4,5,6,7,8,9];
    const filter = filterOddNumbers(w);
    console.log(filter);

    //problem 6
    function sumArray(array){
        let sum = 0;
        for(i=0; i<array.length; i++){
           sum = sum + array[i]
          }
          return sum;
          
    }
    let w1 = [2,3,3,57,8];
    let w11 = sumArray(w1);
    console.log(w11);

  //problem 7
    function sortArray(array){
      
   return array.slice().sort((a, b) => a - b);

    }
    let w2 = [59,2,3,3,57,8];
    let w22 = sortArray(w2);
    console.log(w22);
    
   //problem 8
    function capitalizeFirstLetter(string){
      //   let x = string.split('');
      //   let x1 = x[0].toUpperCase();
        
      //  let xx= x.slice(1,5) ;
      
      //  console.log(xx)
        // let x1 = x[0].toUpperCase();
        const x = string.charAt(0);
        const xx = x.toUpperCase();
        const xxx = xx + string.slice(1);
       return xxx;
        
    }
    let t = 'niloy';
    let t1 = capitalizeFirstLetter(t);
    console.log(t1);
