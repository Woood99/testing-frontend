const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
   test('Корректное значение', () => {
      expect(mapArrToStrings([1, 2, 3, 1.2])).toEqual(['1', '2', '3']);
   });
   test('Мешанина', () => {
      expect(mapArrToStrings(['1', 2, -1, null, 'fasfas', undefined, true])).toEqual(['2', '-1']);
   });
   test('Пустой массив', () => {
      expect(mapArrToStrings(['5', false])).toEqual([]);
   });
   test('Пустой массив2', () => {
      expect(mapArrToStrings([])).toEqual([]);
   });
   test('Отрицание', () => {
      expect(mapArrToStrings([1, 2, '9'])).not.toEqual([]);
   });
});
