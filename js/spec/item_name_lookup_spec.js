describe('ItemNameLookup', () => {
  describe('.match', () => {
    describe('when given a Conjured string', () => {
      it('returns the Conjured class', () => {
        const itemNameLookup = new ItemNameLookup();
        const result = itemNameLookup.match('Conjured');
        
        expect(result.name).toEqual('Conjured')
      });
    });
  });
});
