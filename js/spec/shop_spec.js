describe('Shop', () => {
  describe('.updateQuality', () => {
    describe('When not a special name', () => {
      describe('When sell by date has not passed', () => {
        describe('When Quality is higher than 0', () => {
          it('it reduces quality by 1', () => {
            const item = {
              name: "Non-special name",
              sellIn: 1,
              quality: 1,
            }
            const gildedRose = new Shop([item]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(0);
          });
        });
      });
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
