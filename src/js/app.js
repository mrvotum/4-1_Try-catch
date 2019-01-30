const shoppingCount = '10';

export default function convertToNumber(shoppingCount) {
  const shoppingCountCon = Number(shoppingCount);

  if (isNaN(shoppingCountCon) === true) {
    throw (shoppingCountCon);
  }

  console.log(shoppingCount);

  return shoppingCountCon;
}

try {
  convertToNumber(shoppingCount);
} catch (e) {
  console.error(`Похоже '${shoppingCount}' не является числом десятичной системы`);
}
