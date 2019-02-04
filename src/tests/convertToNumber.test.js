import convertToNumber from '../js/convertToNumber';

test('Base 10', () => {
  const input = '10';

  const expected = 10; // ожидает
  const received = convertToNumber(input); // получает
  expect(received).toBe(expected); // сравнивает
});

test('Different letters', () => {
  const input = 'Десять';

  const expected = 'NaN'; // ожидает
  const received = convertToNumber(input); // получает
  expect(received).toBe(expected); // сравнивает
});

test('Nuber base 16', () => {
  const input = '0x76';

  const expected = 'NaN'; // ожидает
  const received = convertToNumber(input); // получает
  expect(received).toBe(expected); // сравнивает
});
