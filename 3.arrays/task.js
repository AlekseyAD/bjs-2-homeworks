function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  if (arr1.length === arr2.length) {
    result = arr1.every((num, i) => num === arr2[i]);
  } else result = false;

  return result; // boolean
}

function advancedFilter(arr) {
  //let resultArr;

  // Ваш код
  let resultArr = arr.filter((number) => number > 0 && number % 3 === 0).map((number) => number * 10);

  return resultArr; // array
}
