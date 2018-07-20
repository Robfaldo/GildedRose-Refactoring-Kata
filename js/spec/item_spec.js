describe('Item', () => {
  describe('When all paramaters are valid', () => {
    it('it is successfully instantiated', () => {
      const expectedResult = { name: 'Item name', sellIn: 5, quality: 5 }
      const item = new Item('Item name', 5, 5);

      expect(item).toEqual(expectedResult)
    });
  });
