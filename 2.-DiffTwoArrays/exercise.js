function diffArray(arr1, arr2) {
  let newArr = [];

  newArr = getDiffArray(arr1, arr2);
  newArr = newArr.concat(getDiffArray(arr2, arr1));
  return newArr;
}

function getDiffArray(arr1, arr2) {
  let resultArray = [];
    arr1.forEach((element) => {
    let found = false;
    let i = 0;
    do {
      if (element == arr2[i]) found = true;
      i++;
    } while (!found && i < arr2.length);
    if (found === false) resultArray.push(element);
  });

  return resultArray;
}

console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
