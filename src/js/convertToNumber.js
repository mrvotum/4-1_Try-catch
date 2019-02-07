function convertToNumber(shoppingCount) {
  let shoppingCountConverted = 0;
  const filterInt = function checkingInt(value) {
    if (/^([0-9]+|Infinity)$/.test(value)) {
      shoppingCountConverted = Number(value);
      return shoppingCountConverted;
    }
    throw TypeError('Incorrect count');
  };

  filterInt(shoppingCount);
  return shoppingCountConverted;
}

export default convertToNumber;
