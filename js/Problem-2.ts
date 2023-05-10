function atbashCipher(input: string) {
  const plainAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const cipherAlphabet = "zyxwvutsrqponmlkjihgfedcba";
  let output = ""; // string kosong untuk diinisialisasi menyimpan hasilnya

  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase(); //Setiap karakter dikonversi menjadi huruf kecil menggunakan metode toLowerCase
    const index = plainAlphabet.indexOf(char); //mencari indeksnya dalam alfabet plain menggunakan metode indexOf
    if (index !== -1) {
      //Jika karakter tidak ditemukan dalam alfabet plain (yaitu, bukan huruf), karakter tersebut ditambahkan ke dalam string output.
      output += cipherAlphabet[index];
    } else {
      //jika karakter tersebut merupakan huruf, karakter yang sesuai dalam alfabet cipher akan ditambahkan ke dalam string output.
      output += char;
    }
  }

  return output; //fungsi mengembalikan string output
}

console.log(atbashCipher("Olivn rkhfn wloli hrg znvg"));
console.log(atbashCipher("Svool dliow! R'n ovzimrmt gbkvhxirkg!"));
console.log(atbashCipher("Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt"));
