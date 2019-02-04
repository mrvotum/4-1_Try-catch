function convertToNumber(shoppingCount) {
  const filterInt = function checkingInt(value) {
    if (/^([0-9]+|Infinity)$/.test(value)) return Number(value);
    throw NaN;
  };

  filterInt(shoppingCount);
}

export default convertToNumber;
