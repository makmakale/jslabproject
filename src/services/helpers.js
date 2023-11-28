export function Logger(title, param) {
  if (typeof title !== 'string') {
    throw new Error('Параметр title должен быть строкой');
  }

  let strLen = title.length;
  let firstRow = '='.repeat(10) + title.toUpperCase() + '='.repeat(10);
  let secondRow = '='.repeat(20 + strLen);
  let lastRow = secondRow;

  console.info(firstRow);
  console.info(secondRow);
  console.info(JSON.stringify(param, null, 2));
  console.info(lastRow);
}

export function getWeight(weight) {
  if (weight >= 1000) {
    return weight / 1000 + ' т.';
  }
  return weight + ' кг.';
}
