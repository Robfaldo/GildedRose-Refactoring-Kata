describe('Normal', () => {
  describe('When created', () => {
    it('copies the items state', () => {
      const inputItem = {
        name: 'non-special name',
        sellIn: 1,
        quality: 0
      }

      const normal = new Normal(inputItem);
      expect(normal).toEqual(inputItem)
    });
  });
});
