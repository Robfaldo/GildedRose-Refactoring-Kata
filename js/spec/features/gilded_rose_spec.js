describe("Gilded Rose", function() {
  describe('.updateQuality', () => {
    it('updates the quality and sellin property values', () => {
      const itemInput = [ new Item("foo", 5, 10) ]
      const gildedRose = new Shop(itemInput);

      const updatedItems = gildedRose.updateQuality()
      const firstItem = updatedItems[0]

      expect(firstItem.quality).toEqual(9)
      expect(firstItem.sellIn).toEqual(4)
    });
  });
});
