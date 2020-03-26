const herdTheBabies = (str = "") => {
  const alphabetisedStr = alphabetise(str);
  return groupLetters(alphabetisedStr)
    .map(letterGroup => arrangeCases(letterGroup))
    .join("");
};

const alphabetise = str => {
  return str
    .split("")
    .sort(
      (a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
    )
    .join("");
};

const groupLetters = str => {
  let currLetterGroup = "";
  let letterArr = [];
  str.split("").forEach((letter, idx) => {
    if (idx === 0 || str[idx - 1].toLowerCase() === letter.toLowerCase()) {
      currLetterGroup = currLetterGroup.concat(letter);
    } else {
      letterArr.push(currLetterGroup);
      currLetterGroup = letter;
    }
    if (idx === str.length - 1) {
      letterArr.push(currLetterGroup);
      currLetterGroup = letter;
    }
  });
  return letterArr;
};

const arrangeCases = str => {
  return str
    .split("")
    .sort((a, b) => {
      return a.charCodeAt(0) - b.charCodeAt(0);
    })
    .join("");
};
module.exports = herdTheBabies;
