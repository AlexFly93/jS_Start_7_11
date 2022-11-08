//1) Якщо значення змінної number позитивне або0 - виводимо "positive", інакше - "negative"

const number1 = -56;
const MINPOS = 0;

if (number1 >= MINPOS) {
  console.log("positive");
} else {
  console.log("negative");
}

//2) Є дві змінні - num1 і num2. Якщо num1>num2 - вивести результат віднімання, інакше - вивести результат множення

const num1 = 10;
const num2 = 33;

if (num1 > num2) {
  console.log(num1 - num2);
} else {
  console.log(num1 * num2);
}

//3) Якщо значення змінної кратно(тобто ділеться без остачі) на 7 і одночасно кратна 3 - виводимо "you win!", інакше - "you loose"

const number = 21;

if (number % 7 === 0 ,  number % 3 === 0) {
  console.log("YOU_WIN");
} else {
  console.log("YOU_LOOSE");
}
