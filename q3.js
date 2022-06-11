function linearSearch(array, key){
    for(let i = 0; i < array.length; i++){
      if(array[i] === key) {
          return i;
      }
    }
    return -1;
}
console.log(linearSearch([2,3,4,5,8,9],9));


