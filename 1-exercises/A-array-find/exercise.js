/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

let names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

const firstLetterOfName = (name) => {
  if (name.charAt(0) === "A" && name.length > 7) {
    return name;
  }
};

function findLongNameThatStartsWithA(names) {
  return names.find(firstLetterOfName);
}

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);
/* EXPECTED OUTPUT */
// "Alexandra"
