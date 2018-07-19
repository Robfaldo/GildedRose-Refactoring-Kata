describe('Conjured', () => {
  describe('When created', () => {
    it('copies the items state', () => {
      const inputItem = {
        name: "any name",
        sellIn: 1,
        quality: 0
      }
      
      const conjured_item = new Conjured(inputItem);

      expect(conjured_item).toEqual(inputItem)
    });
  });
});
