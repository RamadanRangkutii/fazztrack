const ubahVocal = (teks) =>{
  if(typeof(teks)!="string"){
    return "Tipe data teks harus string"
  }else{
    teks = teks.toLocaleLowerCase().split('');
    let vokal = ['a','e','i','o','u'];
    for(let i=0; i<teks.length; i++){
      if(vokal.indexOf(teks[i])>=0){
        teks[i]="o";
      }
    }
    return teks.join('');
  }
}


console.log(ubahVocal('jakArtA'));

