function whatIsInAName(collection, source) {
  let results = [];
  collection.forEach((value) => {
    if (isValidCollection(source, value)) results.push(value);
  });
  return results;
}

function isValidCollection(validation, value) {
  let resultsValidation = [];
  let validationKeys = Object.keys(validation);
  validationKeys.forEach((key) => {
    if (value.hasOwnProperty(key)) {
      resultsValidation.push(true);
    } else {
      resultsValidation.push(false);
    }
  });

  if (resultsValidation.filter((isValid) => isValid == false).length == 0) {
    resultsValidation = [];
    validationKeys.forEach((key) => {
      if (validation[key] === value[key]) resultsValidation.push(true);
      else resultsValidation.push(false);
    });
  }

  let isValid = resultsValidation.filter((isValid) => isValid == false).length == 0 ?? true | false;
  return isValid;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
