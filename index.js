const multiplication = (x, y) => {
  return x * y;
};

const concatOdds = (arr1, arr2) => {
  let oddArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 !== 0) {
      oddArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 !== 0) {
      oddArr.push(arr2[i]);
    }
  }
  return oddArr;
};

module.exports = { multiplication, concatOdds };

//console.log(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]));
