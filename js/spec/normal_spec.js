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
  describe('.update', () => {
    describe('When not a special name', () => {
      describe('When sell by date has passed', () => {
        describe('When quality is 2 or higher', () => {
          it('reduces quality by 2 and sellIn by 1', () => {
            const item = {
              name: "non-special name",
              sellIn: -1,
              quality: 2,
            }
            const expectedResult = {
              name: 'non-special name',
              sellIn: -2,
              quality: 0
            }
            const normalItem = new Normal(item);

            const result = normalItem.update();

            expect(result).toEqual(expectedResult);
          });
        });
        describe('When quality is 1', () => {
          it('reduces quality to zero and sellIn by 1', () => {
            const item = {
              name: "non-special name",
              sellIn: -1,
              quality: 1,
            }
            const expectedResult = {
              name: 'non-special name',
              sellIn: -2,
              quality: 0
            }
            const normalItem = new Normal(item);

            const result = normalItem.update();

            expect(result).toEqual(expectedResult);
          });
        });
        describe('When quality is 0', () => {
          it('only reduces sellIn', () => {
            const item = {
              name: "non-special name",
              sellIn: 10,
              quality: 0,
            }
            const expectedResult = {
              name: 'non-special name',
              sellIn: 9,
              quality: 0
            }
            const normalItem = new Normal(item);

            const result = normalItem.update();

            expect(result).toEqual(expectedResult);
          });
        });
      });
      describe('When sell by date has not passed', () => {
        describe('When quality is higher than 0', () => {
          it('reduces quality by 1 and sellIn by 1', () => {
            const item = {
              name: "non-special name",
              sellIn: 1,
              quality: 1,
            }
            const expectedResult = {
              name: 'non-special name',
              sellIn: 0,
              quality: 0
            }
            const normalItem = new Normal(item);

            const result = normalItem.update();

            expect(result).toEqual(expectedResult);
          });
          it('when sellIn is zero it treats is as not passed', () => {
            const item = {
              name: "non-special name",
              sellIn: 0,
              quality: 10,
            }
            const expectedResult = {
              name: 'non-special name',
              sellIn: -1,
              quality: 9
            }
            const normalItem = new Normal(item);

            const result = normalItem.update();

            expect(result).toEqual(expectedResult);
          });
          it('reduces quality by 1 and sellIn by 1', () => {
            const item = {
              name: "non-special name",
              sellIn: 5,
              quality: 8,
            }
            const expectedResult = {
              name: 'non-special name',
              sellIn: 4,
              quality: 7
            }
            const normalItem = new Normal(item);

            const result = normalItem.update();

            expect(result).toEqual(expectedResult);
          });
        });
      });
    });
  });
});
