describe('AgedBrie', () => {
  describe('When created', () => {
    it('copies the items state', () => {
      const inputItem = {
        name: 'Aged Brie',
        sellIn: 1,
        quality: 0
      }

      const agedBrie = new AgedBrie(inputItem);
      expect(agedBrie).toEqual(inputItem)
    });
  });
});
