function acronym(phrase: string) {
  const words = phrase.split(" "); //memecah string input menjadi array menggunakan metode split
  let result = ""; //deklarasi variabel untuk menampung setiap kata
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    result += word.charAt(0).toUpperCase(); //mengambil karakter pertama menggunakan charAt(0) dan menambahkannya ke string hasil dengan huruf kapital menggunakan toUpperCase()
  }
  return result;
}

const phrase1 = "Portable Network Graphics";
const acronym1 = acronym(phrase1);
console.log(acronym1);

const phrase2 = "Correct me if I'm wrong";
const acronym2 = acronym(phrase2);
console.log(acronym2);

const phrase3 = "Thanks god It's Friday";
const acronym3 = acronym(phrase3);
console.log(acronym3);
