function sumFor(list) {

  let forSum = 0;
  for (let i = 0; i < list.length; i++) {

    forSum += i;
  }

  return forSum;
}

console.log(sumFor([1, 2, 3, 4]));

function sumWhile(list) {

  let whileSum = 0;
  let comp = 0;
  while(comp < list.length) {

    whileSum += list[comp];
    comp++;
  }

  return whileSum;
}

console.log(sumWhile([1, 2, 3, 4]));

function sumRecursion(list) {

  let recursiveSum = 0;
  let comp = 0;
  if (comp === list.length) {

    return recursiveSum;
  } else {

    recursiveSum += list[comp];
    sumRecursion(list[comp++]);
  }

  return recursiveSum;
}

console.log(sumRecursion([1, 2, 3, 4]));

function sumTheSimpleWay(list) {

  let simpleSum =  _.reduce(list, function(memo, num){ return memo + num; }, 0);
  return simpleSum;
}

console.log(sumTheSimpleWay([1, 2, 3, 4]));