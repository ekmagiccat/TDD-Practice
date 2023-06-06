// Business Logic

function wordCounter(text) {
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (word) {
    wordCount++;
  });
  return wordCount;
}

//It should return 1 if a passage has just one word.

function wordCounter(text) {
  if (text.length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (word) {
    wordCount++;
  });
  return wordCount;
}

// Business Logic (4th test)

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (word) {
    wordCount++;
  });
  return wordCount;
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

//numberOfOccurrencesInText() test

function numberOfOccurrencesInText(word, text) {
  return 0;
}

function numberOfOccurrencesInText(word, text) {
  if (word === text) {
    return 1;
  }
  return 0;
}
//correct code, but missing uppercase words

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (word === element) {
      wordCount++;
    }
  });
  return wordCount;
}

//code that counts uppercase words

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (word.toLowerCase() === element.toLowerCase()) {
      wordCount++;
    }
  });
  return wordCount;
}

//code that counts words with punctuation, upppercase, etc.
function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

//TDD practice lesson 28
function omitCurseWords(text) {
  let curseWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  console.log(text);
  let wordOutput = text;
  curseWords.forEach(function (word) {
    wordOutput = wordOutput.replace(word, " ");
    console.log(wordOutput);
  });

  return wordOutput;
}
