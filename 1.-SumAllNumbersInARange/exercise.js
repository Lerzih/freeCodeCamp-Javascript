function sumAll(arr) {
  let numbers = [];

  if (arr[0] < arr[arr.length - 1]) {
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
      numbers.push(i);
    }
  } else if (arr[arr.length - 1] < arr[0]) {
    for (let i = arr[arr.length - 1]; i <= arr[0]; i++) {
        numbers.push(i);
      }
  }

  let total = 0;

  numbers.forEach((element) => {
    total = total + element;
  });

  return total;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
