function spinalCase(str) {
  
  let regexUpper = new RegExp(/([a-z][A-Z])/gm);
  data = regexUpper.exec(str);
  console.log(data);
    str = str.replace(/([_\s])/gm, "-");

  return str.toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
