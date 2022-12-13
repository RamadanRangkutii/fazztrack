const isPalindrome = (teks) =>{
  teks = teks.toLowerCase();
  for(let i=0; i<teks.length/2; i++){
    if(teks.length<2){
      return "Teks harus lebih dari 2 huruf!";
    }else{
      if(teks[i] != teks[teks.length-1-i]){
        return "Not a palindrom";
      }
    }
  }
  return "palindrom";
}

console.log(isPalindrome("Malam"));
// console.log(isPalindrome("malam"));

