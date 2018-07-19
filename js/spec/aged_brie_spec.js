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
  describe('.update', () => {
    describe('When name is Aged Brie', () => {
      describe('When quality is 50', () => {
        it('only reduces sellIn', () => {
          const item = {
            name: "Aged Brie",
            sellIn: 10,
            quality: 50,
          }
          const expectedResult = {
            name: 'Aged Brie',
            sellIn: 9,
            quality: 50
          }
          const agedBrieItem = new AgedBrie(item);

          const result = agedBrieItem.update();

          expect(result).toEqual(expectedResult);
        });
      });
      describe('When quality is under 50', () => {
        it('increases quality and reduces sellIn', () => {
          const item = {
            name: "Aged Brie",
            sellIn: 3,
            quality: 30,
          }
          const expectedResult = {
            name: 'Aged Brie',
            sellIn: 2,
            quality: 31
          }
          const agedBrieItem = new AgedBrie(item);

          const result = agedBrieItem.update();

          expect(result).toEqual(expectedResult);
        });
      });
    });
  });
});
