import formatting from '../function';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['+380 000 00 00 00', '+380000000000'], // Ukraine
  ['7 960 000 00 00', '+79600000000'],
])('checked different user nicknames for %s phone', (phone, expected) => {
  const result = formatting(phone);
  expect(result).toBe(expected);
});
