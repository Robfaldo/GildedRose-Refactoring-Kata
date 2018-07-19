describe('Sulfuras', () => {
  describe('When created', () => {
    it('copies the item state', () => {
      const inputItem = {
        name: 'Sulfuras, Hand of Ragnaros',
        sellIn: 1,
        quality: 0
      }

      const sulfurasItem = new Sulfuras(inputItem);
      expect(sulfurasItem).toEqual(inputItem)
    });
  });
  describe('.update', () => {
    it('does not update sellIn or quality', () => {
      const inputItem = {
        name: 'Sulfuras, Hand of Ragnaros',
        sellIn: 1,
        quality: 0
      }

      const expectedResult = {
        name: 'Sulfuras, Hand of Ragnaros',
        sellIn: 1,
        quality: 0
      }
      const sulfurasItem = new Sulfuras(inputItem);

      const result = sulfurasItem.update();

      expect(result).toEqual(expectedResult);
    });
  });
});
