// String Manipulation Functions:
// reverstring
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("12345"));
// countCharacters
function countCharacters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}
console.log(countCharacters("salutsava"));
// capitalizeWord
function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitalizeWords("salut sava"));
// Array Functions:
// findMaxmum
function findMaxMin(arr) {
  if (arr.length === 0) return { max: undefined, min: undefined };

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

console.log(findMaxMin("368"));
// sumOfArray
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumOfArray([3, 5, 9, 3]));
// filterArray
function filterArray(tab) {
  let newTab = [];
  for (let i = 0; i < tab.length; i++) {
    if (typeof tab[i] === "number") {
      newTab.push(tab[i]);
    }
  }
  return newTab;
}
console.log(filterArray([2, 6, 4, 3, 5, 7]));
// Mathematical Functions:
// factorial
function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  let result = 1; 
  for (let i = 1; i <= n; i++) {
   
    result *= i; 
  }
  return result; 
}
console.log(factorial("7"));
// isPrime
function isPrime(num) {
  if (num <= 1) {
    return false; 
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    
    if (num % i === 0) {
      
      return false; 
    }
  }
  return true; 
}
console.log(isPrime("7"));

function generateFibonacci(terms) {
  const fibonacci = [];
  //  generateFibonacci
  for (let i = 0; i < terms; i++) {
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }

  return fibonacci;
}
console.log(generateFibonacci(8));