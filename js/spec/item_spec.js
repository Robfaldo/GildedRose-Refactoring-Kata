describe('Item', () => {
  describe('When all paramaters are valid', () => {
    it('it is successfully instantiated', () => {
      const expectedResult = { name: 'Item name', sellIn: 5, quality: 5 }
      const item = new Item('Item name', 5, 5);

      expect(item).toEqual(expectedResult)
    });
  });
  describe('When there are missing paramters', () => {
    xit('throws an error if missing name', () => {

    });
    xit('throws an error if missing sellIn value', () => {

    });
    xit('throws an error if missing sellIn value', () => {

    });
  });
  describe('When paramaters are invalid', () => {
    xit('throws an error if quality is negative', () => {

    });
    xit('throws an error if quality is over 50', () => {

    });
  });
});
