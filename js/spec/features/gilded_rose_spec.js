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

// Once the sell by date has passed, Quality degrades twice as fast
// The Quality of an item is never negative
// “Aged Brie” actually increases in Quality the older it gets
// The Quality of an item is never more than 50
// “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
//
// “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches;
// Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
// Quality drops to 0 after the concert
