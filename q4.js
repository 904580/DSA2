function searchAlgo(array,number){
    let min=0;
    let max= array.length-1;
    while(min <= max){
        let minIndex=Math.floor(( min+max)/2);
        if(array[minIndex]< number){
            min = minIndex+1;
          }
          else if(array[minIndex]> number){
              max= minIndex-1;
          }else{
              return minIndex;
          }
    }
    return-1;
}

const result = searchAlgo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7);
console.log(result);