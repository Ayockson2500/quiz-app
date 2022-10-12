function shuffleArrayContent(arr) {
  let shuffledArray = [];
  let arrLength = arr.length;
  let i;

  // While there remain elements to shuffle…
  // while arrLength is greater than zero
  while (arrLength) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * arrLength--);

    // And move it to the new array.
    shuffledArray.push(arr.splice(i, 1)[0]);
  }
  return shuffledArray;
}

export default shuffleArrayContent
