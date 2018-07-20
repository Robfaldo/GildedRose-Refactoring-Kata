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
    describe('When multiple items are given', () => {
      it('updates all items', () => {
        const itemInput = [
          new Item("Conjured", 1, 1),
          new Item("Backstage passes to a TAFKAL80ETC concert", 1, 47),
          new Item("Sulfuras, Hand of Ragnaros", 10, 10),
          new Item("Aged Brie", 3, 30),
          new Item('Without a special name', 1, 1)
        ]
        const expectedResult = [
          new Item("Conjured", 0, 0),
          new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50),
          new Item("Sulfuras, Hand of Ragnaros", 10, 10),
          new Item("Aged Brie", 2, 31),
          new Item('Without a special name', 0, 0)
        ]
        const gildedRose = new Shop(itemInput);

        const result = gildedRose.updateQuality()
        expect(result).toEqual(expectedResult)
      });
    });
  });
});
