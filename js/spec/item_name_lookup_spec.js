describe('ItemNameLookup', () => {
  describe('.match', () => {
    describe('when given a Conjured string', () => {
      it('returns the Conjured class', () => {
        const itemNameLookup = new ItemNameLookup();
        const result = itemNameLookup.match('Conjured');

        expect(result.name).toEqual('Conjured')
      });
    });
    describe('when given a Sulfuras string', () => {
      it('returns the Sulfuras class', () => {
        const itemNameLookup = new ItemNameLookup();
        const result = itemNameLookup.match('Sulfuras, Hand of Ragnaros');

        expect(result.name).toEqual('Sulfuras')
      });
    });
    describe('when given a backStagePasses string', () => {
      it('returns the BackstagePasses class', () => {
        const itemNameLookup = new ItemNameLookup();
        const result = itemNameLookup.match('Backstage passes to a TAFKAL80ETC concert');

        expect(result.name).toEqual('BackstagePasses')
      });
    });
    describe('when given a Aged Brie string', () => {
      it('returns the AgedBrie class', () => {
        const itemNameLookup = new ItemNameLookup();
        const result = itemNameLookup.match('Aged Brie');

        expect(result.name).toEqual('AgedBrie')
      });
    });
    describe('when given a normal name', () => {
      it('returns the Normal class', () => {
        const itemNameLookup = new ItemNameLookup();
        const result = itemNameLookup.match('non-special name');

        expect(result.name).toEqual('Normal')
      });
    });
  });
});
