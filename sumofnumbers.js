const testNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumFor(list) {
  let forSum = 0;
  for (let i = 0; i <= list.length; i++) {
    forSum += i;
  }

  return forSum;
}

console.log(sumFor(testNums));

function sumWhile(list) {
  let whileSum = 0;
  let comp = 0;
  while(comp < list.length) {
    whileSum += list[comp];
    comp++;
  }

  return whileSum;
}

console.log(sumWhile(testNums));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }

  return list[0] + sumRecursion(list.slice(1, list.length));
}

console.log(sumRecursion(testNums));


function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNums));
