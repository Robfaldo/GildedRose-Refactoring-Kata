describe('BackstagePasses', () => {
  describe('When created', () => {
    it('copies the items state', () => {
      const inputItem = {
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 1,
        quality: 0
      }

      const backstagePassesItem = new BackstagePasses(inputItem);
      expect(backstagePassesItem).toEqual(inputItem)
    });
  });
  describe('.update', () => {
    describe('When sell by date has passed', () => {
      it('sets quality to 0 and reduces sellIn', () => {
        const item = {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 0,
          quality: 30,
        }
        const expectedResult = {
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: -1,
          quality: 0
        }
        const backstagePassesItem = new BackstagePasses(item);

        const result = backstagePassesItem.update();

        expect(result).toEqual(expectedResult);
      });
    });
    describe('When concert is in 1-5 days', () => {
      describe('When quality is under 48', () => {
        it('triples the quality added and reduces sellIn', () => {
          const item = {
            name: "Backstage passes to a TAFKAL80ETC concert",
            sellIn: 1,
            quality: 47,
          }
          const expectedResult = {
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 0,
            quality: 50
          }
          const backstagePassesItem = new BackstagePasses(item);

          const result = backstagePassesItem.update();

          expect(result).toEqual(expectedResult);
        });
        it('triples the quality and reduces sellIn', () => {
          const item = {
            name: "Backstage passes to a TAFKAL80ETC concert",
            sellIn: 5,
            quality: 47,
          }
          const expectedResult = {
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 4,
            quality: 50
          }
          const backstagePassesItem = new BackstagePasses(item);

          const result = backstagePassesItem.update();

          expect(result).toEqual(expectedResult);
        });
      });
      describe('When quality is over 47', () => {
        it('sets quality to 50 and reduces sellIn', () => {
          const item = {
            name: "Backstage passes to a TAFKAL80ETC concert",
            sellIn: 5,
            quality: 48,
          }
          const expectedResult = {
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 4,
            quality: 50
          }
          const backstagePassesItem = new BackstagePasses(item);

          const result = backstagePassesItem.update();

          expect(result).toEqual(expectedResult);
        });
      });
    });
    describe('When concert is in 6-10 days', () => {
      describe('When quality is under 49', () => {
        it('doubles the quality added and reduces the sellIn', () => {
          const item = {
            name: "Backstage passes to a TAFKAL80ETC concert",
            sellIn: 6,
            quality: 48,
          }
          const expectedResult = {
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 5,
            quality: 50
          }
          const backstagePassesItem = new BackstagePasses(item);

          const result = backstagePassesItem.update();

          expect(result).toEqual(expectedResult);
        });
        it('doubles the quality added and reduces the sellIn', () => {
          const item = {
            name: "Backstage passes to a TAFKAL80ETC concert",
            sellIn: 10,
            quality: 48,
          }
          const expectedResult = {
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 9,
            quality: 50
          }
          const backstagePassesItem = new BackstagePasses(item);

          const result = backstagePassesItem.update();

          expect(result).toEqual(expectedResult);
        });
      });
      describe('When quality is over 48', () => {
        it('sets quality to 50 and reduces sellIn', () => {
          const item = {
            name: "Backstage passes to a TAFKAL80ETC concert",
            sellIn: 6,
            quality: 49,
          }
          const expectedResult = {
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 5,
            quality: 50
          }
          const backstagePassesItem = new BackstagePasses(item);

          const result = backstagePassesItem.update();

          expect(result).toEqual(expectedResult);
        });
      });
    });
    describe('When concert is over 10 days away', () => {
      describe('When quality is under 50', () => {
        it('increases quality by 1 and reduces sellIn', () => {
          const item = {
            name: "Backstage passes to a TAFKAL80ETC concert",
            sellIn: 11,
            quality: 49,
          }
          const expectedResult = {
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 10,
            quality: 50
          }
          const backstagePassesItem = new BackstagePasses(item);

          const result = backstagePassesItem.update();

          expect(result).toEqual(expectedResult);
        });
      });
      describe('When quality is 50', () => {
        it('isets quality to 50 and reduces sellIn', () => {
          const item = {
            name: "Backstage passes to a TAFKAL80ETC concert",
            sellIn: 11,
            quality: 50,
          }
          const expectedResult = {
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 10,
            quality: 50
          }
          const backstagePassesItem = new BackstagePasses(item);

          const result = backstagePassesItem.update();

          expect(result).toEqual(expectedResult);
        });
      });
    });
  });
});
