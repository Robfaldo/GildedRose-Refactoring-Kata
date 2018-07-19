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
});
