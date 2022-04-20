import formatting from './function';

const phoneBook = [
  '8 (927) 000-00-00',
  '+7 960 000 00 00',
  '+86 000 000 0000',
];

phoneBook.forEach((phone) => console.log(formatting(phone)));
