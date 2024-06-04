//Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else {
    console.log(i);
  }
}

//Prime Time
// let primeNumbers = "";
// for (let i = 1; i <= 100; i++) {
//   let counter = 0;
//   for (let j = i; j >= 1; j--) {
//     if (i % j === 0) {
//       counter = counter + 1;
//     }
//   }
//   if (counter === 2) {
//     primeNumbers = primeNumbers + i;
//   }
// }

// console.log(primeNumbers);

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
