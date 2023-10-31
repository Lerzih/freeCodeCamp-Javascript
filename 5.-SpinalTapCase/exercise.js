function spinalCase(str) {
  let regexUpper = /([a-z][A-Z])/gm;
  regex = [];
  let result = [];
  do {
    result = regexUpper.exec(str);
    if (result !== null ) {
      find = result.shift();
      str = str.replace(find, find[0]+"-"+find[1]);
    }
  } while (result !== null)
  str = str.replace(/([_\s])/gm, "-");

  return str.toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
