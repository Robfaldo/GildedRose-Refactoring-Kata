describe('Conjured', () => {
  describe('When created', () => {
    it('copies the items state', () => {
      const inputItem = {
        name: "Conjured",
        sellIn: 1,
        quality: 0
      }

      const conjured_item = new Conjured(inputItem);
      expect(conjured_item).toEqual(inputItem)
    });
  });
  describe('.update', () => {
    describe('When quality is 0', () => {
      it('does not reduce quality', () => {
        const item = {
          name: "Conjured",
          sellIn: 1,
          quality: 0,
        }
        const expectedResult = {
          name: 'Conjured',
          sellIn: 0,
          quality: 0
        }
        const conjured_item = new Conjured(item);

        const result = conjured_item.update();

        expect(result).toEqual(expectedResult);
      });
    });
    describe('When name is Conjured', () => {
      describe('When sell by date has passed', () => {
        describe('When quality is 4 or higher', () => {
          it('Degrades quality by 4 & sellIn by 1', () => {
            const item = {
              name: 'Conjured',
              sellIn: -1,
              quality: 10,
            }

            const expectedResult = {
              name: 'Conjured',
              sellIn: -2,
              quality: 6
            }

            const conjured_item = new Conjured(item);

            const result = conjured_item.update();

            expect(result).toEqual(expectedResult);
          });
        });
        describe('When quality is 0', () => {
          it('Only reduces the sellin by 1', () => {
            const item = {
              name: 'Conjured',
              sellIn: -1,
              quality: 0,
            }

            const expectedResult = {
              name: 'Conjured',
              sellIn: -2,
              quality: 0
            }

            const conjured_item = new Conjured(item);

            const result = conjured_item.update();

            expect(result).toEqual(expectedResult);
          });
        });
        describe('When quality is 1', () => {
          it('reduces quality to 0', () => {
            const item = {
              name: 'Conjured',
              sellIn: -1,
              quality: 1,
            }

            const expectedResult = {
              name: 'Conjured',
              sellIn: -2,
              quality: 0
            }

            const conjured_item = new Conjured(item);

            const result = conjured_item.update();

            expect(result).toEqual(expectedResult);
          });
        });
        describe('When quality is 3', () => {
          it('reduces quality to 0', () => {
            const item = {
              name: 'Conjured',
              sellIn: -1,
              quality: 3,
            }

            const expectedResult = {
              name: 'Conjured',
              sellIn: -2,
              quality: 0
            }

            const conjured_item = new Conjured(item);

            const result = conjured_item.update();

            expect(result).toEqual(expectedResult);
          });
        });
      });
      describe('When sell by date has not passed', () => {
        describe('When quality is 0', () => {
          it('Only reduces sellIn by 1', () => {
            const item = {
              name: 'Conjured',
              sellIn: 1,
              quality: 0,
            }

            const expectedResult = {
              name: 'Conjured',
              sellIn: 0,
              quality: 0
            }

            const conjured_item = new Conjured(item);

            const result = conjured_item.update();

            expect(result).toEqual(expectedResult);
          });
        });
        describe('When quality is 1', () => {
          it('reduces quality to 0 and sellIn by 1', () => {
            const item = {
              name: 'Conjured',
              sellIn: 1,
              quality: 1,
            }

            const expectedResult = {
              name: 'Conjured',
              sellIn: 0,
              quality: 0
            }

            const conjured_item = new Conjured(item);

            const result = conjured_item.update();

            expect(result).toEqual(expectedResult);
          });
        });
        describe('When quality is 2 or higher', () => {
          it('reduces quality by 2 and sellIn by 1', () => {
            const item = {
              name: 'Conjured',
              sellIn: 1,
              quality: 2,
            }

            const expectedResult = {
              name: 'Conjured',
              sellIn: 0,
              quality: 0
            }

            const conjured_item = new Conjured(item);

            const result = conjured_item.update();

            expect(result).toEqual(expectedResult);
          });
          it('reduces quality by 2 and sellIn by 1', () => {
            const item = {
              name: 'Conjured',
              sellIn: 1,
              quality: 3,
            }

            const expectedResult = {
              name: 'Conjured',
              sellIn: 0,
              quality: 1
            }

            const conjured_item = new Conjured(item);

            const result = conjured_item.update();

            expect(result).toEqual(expectedResult);
          });
        });
      });
    });
  });
});
