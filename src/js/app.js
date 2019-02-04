import convertToNumber from './convertToNumber.js';

const shoppingCount = '101';

try {
  convertToNumber(shoppingCount);
  console.log(`Число покупок: ${shoppingCount}`);
} catch (e) {
  console.error(`Похоже '${shoppingCount}' не является числом десятичной системы`);
}
