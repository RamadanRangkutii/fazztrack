const matematika=100;
const bahasaIndonesia=90;
const bahasaInggris=70;
const ipa=1;
const grades = [matematika,bahasaIndonesia,bahasaInggris,ipa];

const countAvarage = (grades) =>{
  let sum = 0;
  for(let i=0; i<grades.length; i++){
    if(grades[i]=="" || typeof(grades[i])!="number" || grades[i]>100 || grades[i]<0 ){
      return "Semua nilai harus terisi!";
    }else{
      sum += grades[i];
    }   
  }
  avg = sum / grades.length

  if(avg>=90 && avg<=100){
    return`Rata-rata = ${avg}\nGrade = A`;
  }else if(avg>=80 && avg<=89){
    return`Rata-rata = ${avg}\nGrade = B`;
  }else if(avg>=70 && avg<=79){
    return`Rata-rata = ${avg}\nGrade = C`;
  }else if(avg>=60 && avg<=69){
    return`Rata-rata = ${avg}\nGrade = D`;
  }else{
    return`Rata-rata = ${avg}\nGrade = E`;
  }
 
}


console.log(countAvarage(grades));
