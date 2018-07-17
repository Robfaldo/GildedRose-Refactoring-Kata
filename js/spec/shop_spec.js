describe('Shop', () => {
  describe('.updateQuality', () => {
    describe('When quality is 0', () => {
      it('does not reduce quality', () => {
        const item = {
          name: "any name",
          sellIn: 1,
          quality: 0,
        }
        const gildedRose = new Shop([item]);

        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).toEqual(0);
      });
    });
    describe('When not a special name', () => {
      describe('When sell by date has passed', () => {
        describe('When quality is higher than 0', () => {
          it('reduces quality by 2 and sellIn by 1', () => {
            const item = {
              name: "Non-special name",
              sellIn: -1,
              quality: 10,
            }
            const gildedRose = new Shop([item]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(8);
            expect(updatedItems[0].sellIn).toEqual(-2);
          });
        });
        describe('When quality is 0', () => {
          it('only reduces sellIn', () => {
            const item = {
              name: "Non-special name",
              sellIn: 10,
              quality: 0,
            }
            const gildedRose = new Shop([item]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(0);
            expect(updatedItems[0].sellIn).toEqual(9);
          });
        });
      });
      describe('When sell by date has not passed', () => {
        describe('When quality is higher than 0', () => {
          it('reduces quality by 1 and sellIn by 1', () => {
            const item = {
              name: "Non-special name",
              sellIn: 1,
              quality: 1,
            }
            const gildedRose = new Shop([item]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(0);
            expect(updatedItems[0].quality).toEqual(0);
          });
        });
      });
    });

    describe('When name is Sulfuras', () => {
      it('Quality and SellIn remains the same', () => {
        const item = {
          name: "Sulfuras, Hand of Ragnaros",
          sellIn: 1,
          quality: 1,
        }
        const gildedRose = new Shop([item]);

        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).toEqual(1);
        expect(updatedItems[0].sellIn).toEqual(1);
      })
      it('Quality and SellIn remains the same', () => {
        const item = {
          name: "Sulfuras, Hand of Ragnaros",
          sellIn: -1,
          quality: 50,
        }
        const gildedRose = new Shop([item]);

        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).toEqual(50);
        expect(updatedItems[0].sellIn).toEqual(-1);
      });
    });
    describe('When name is Aged Brie', () => {
      describe('When quality is 50', () => {
        it('only reduces sellIn', () => {
          const item = {
            name: "Aged Brie",
            sellIn: 10,
            quality: 50,
          }
          const gildedRose = new Shop([item]);

          const updatedItems = gildedRose.updateQuality();

          expect(updatedItems[0].quality).toEqual(50);
          expect(updatedItems[0].sellIn).toEqual(9);
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
