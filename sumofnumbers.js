function sumFor(array) {
  let sum = 0;
  for (let thing in array) {
   sum += thing;
  }
  return sum;
}

function sumWhile(array) {
  let sum = 0;
  let i = 0;
  while(i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

function sumRecursion(array, n) {
  if (n <= 0) {
    return 0;
  }
  return (sumRecursion(array, n-1) + array(n-1));
}

function sumTheSimpleWay(array) {
  _.reduce(array, function(sum, num) {
    return sum+num;
  });
}

export default {sumFor, sumWhile, sumRecursion, sumTheSimpleWay}


