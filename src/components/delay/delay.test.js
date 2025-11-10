const delay = require('./delay');

describe('delay', () => {
   test('Корректное значение', async () => {
      expect(await delay(() => 3+2, 1000)).toBe(5);
   });
});
