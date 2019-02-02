import convertToNumber from './fun-convertToNumber.js';

const shoppingCount = '10';

try {
  convertToNumber(shoppingCount);
} catch (e) {
  console.error(`Похоже '${shoppingCount}' не является числом десятичной системы`);
}
