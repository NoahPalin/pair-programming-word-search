const wordSearch = (letters, word) => {
  let tempStrin;
  for (let i = 0; i < letters.length; i++) {
    tempStrin = letters[i].join('');

    // Checks if word is in array.
    if (tempStrin.includes(word)) {
      return true;
    }
  }

  const transpArray = transpose(letters);
  
  for (let j = 0; j < transpArray.length; j++) {
    tempStrin = transpArray[j].join('');

    // Checks if word is in array.
    if (tempStrin.includes(word)) {
      return true;
    } 
  }
  return false;
};

const transpose = function (matrix, word) {
  // Define a new array to hold all the elements of the answer.
  const newArray = [];
  for (var i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newArray[j].push(matrix[i][j]);
    }
  }
  return newArray;
};


console.log(wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEW'));

module.exports = wordSearch