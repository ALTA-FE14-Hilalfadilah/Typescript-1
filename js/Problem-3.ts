function isArmstrongNumber(num: number) {
  const numString = num.toString(); //ubah menjadi string
  const power = numString.length;
  let sum = 0;

  for (let i = 0; i < power; i++) {
    sum += Math.pow(parseInt(numString.charAt(i)), power);
  }

  return sum === num; //membandingkan jumlah yang telah dihitung dengan angka input, dan mengembalikan nilai true jika mereka sama, yang menunjukkan bahwa angka input adalah bilangan Armstrong
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(9));
console.log(isArmstrongNumber(10));
