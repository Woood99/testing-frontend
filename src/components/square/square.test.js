const square = require('./square');

describe('square', () => {
   test('Корректное значение', () => {
      expect(square(2)).toBe(4);
   });

   test('Корректное значение', () => {
      expect(square(3)).toBeLessThan(16); // число меньше 16
   });

   test('Корректное значение', () => {
      expect(square(3)).toBeGreaterThan(8); // число больше 8
   });

   test('Корректное значение', () => {
      expect(square(3)).not.toBeUndefined();
   });
});
