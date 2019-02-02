export default function convertToNumber(shoppingCount) {
  const shoppingCountConverted = Number(shoppingCount);

  if (Number.isFinite(shoppingCountConverted) === false) {
    throw (shoppingCountConverted);
  }

  console.log(`Число покупок: ${shoppingCountConverted}`);

  return shoppingCountConverted;
}
// export default { convertToNumber };
