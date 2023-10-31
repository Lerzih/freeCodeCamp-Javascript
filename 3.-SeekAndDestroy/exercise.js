function destroyer(arr) {
  let parameters = Array.from(arguments);
  // parameters.pop();
  parameters.forEach((value) => {
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) arr[i] = null;
    }
  });
  let result = [];
  arr.forEach((value) => {
    if (value !== null) result.push(value);
  });
  return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
