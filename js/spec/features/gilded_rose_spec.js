describe("Gilded Rose", function() {
  describe('.updateQuality', () => {
    describe('When name is not a special name', () => {
      it('updates the quality and sellin property values', () => {
        const itemInput = [ new Item("foo", 5, 10) ]
        const gildedRose = new Shop(itemInput);

        const updatedItems = gildedRose.updateQuality()
        const firstItem = updatedItems[0]

        expect(firstItem.quality).toEqual(9)
        expect(firstItem.sellIn).toEqual(4)
      });
    });
    describe('When name is Conjured', () => {
      it('quality degrades twice as fast as normal items', () => {
        const itemInput = [ new Item("Conjured", 5, 10) ]
        const gildedRose = new Shop(itemInput);

        const updatedItems = gildedRose.updateQuality()
        const firstItem = updatedItems[0]

        expect(firstItem.quality).toEqual(8)
        expect(firstItem.sellIn).toEqual(4)
      });
    });
  });
});
