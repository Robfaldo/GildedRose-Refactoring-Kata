describe('Conjured', () => {
  describe('When created', () => {
    it('copies the items state', () => {
      const inputItem = {
        name: "any name",
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
          name: "any name",
          sellIn: 1,
          quality: 0,
        }
        const expectedResult = {
          name: 'any name',
          sellIn: 0,
          quality:0
        }
        const conjured_item = new Conjured(item);

        const result = conjured_item.update();

        expect(result).toEqual(expectedResult);
      });
    });
    // describe('When not a special name', () => {
    //   describe('When sell by date has passed', () => {
    //     describe('When quality is 2 or higher', () => {
    //       it('reduces quality by 2 and sellIn by 1', () => {
    //         const item = {
    //           name: "Non-special name",
    //           sellIn: -1,
    //           quality: 2,
    //         }
    //
    //         const gildedRose = new Shop([item]);
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(0);
    //         expect(updatedItems[0].sellIn).toEqual(-2);
    //       });
    //     });
    //     describe('When quality is 1', () => {
    //       it('reduces quality to zero and sellIn by 1', () => {
    //         const item = {
    //           name: "Non-special name",
    //           sellIn: -1,
    //           quality: 1,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(0);
    //         expect(updatedItems[0].sellIn).toEqual(-2);
    //       });
    //     });
    //     describe('When quality is 0', () => {
    //       it('only reduces sellIn', () => {
    //         const item = {
    //           name: "Non-special name",
    //           sellIn: 10,
    //           quality: 0,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(0);
    //         expect(updatedItems[0].sellIn).toEqual(9);
    //       });
    //     });
    //   });
    //   describe('When sell by date has not passed', () => {
    //     describe('When quality is higher than 0', () => {
    //       it('reduces quality by 1 and sellIn by 1', () => {
    //         const item = {
    //           name: "Non-special name",
    //           sellIn: 1,
    //           quality: 1,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(0);
    //         expect(updatedItems[0].sellIn).toEqual(0);
    //       });
    //       it('when sellIn is zero it treats is as not passed', () => {
    //         const item = {
    //           name: "Non-special name",
    //           sellIn: 0,
    //           quality: 10,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(9);
    //         expect(updatedItems[0].sellIn).toEqual(-1);
    //       });
    //       it('reduces quality by 1 and sellIn by 1', () => {
    //         const item = {
    //           name: "Non-special name",
    //           sellIn: 5,
    //           quality: 8,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(7);
    //         expect(updatedItems[0].sellIn).toEqual(4);
    //       });
    //     });
    //   });
    // });
    //
    // describe('When name is Sulfuras', () => {
    //   it('Quality and SellIn remains the same', () => {
    //     const item = {
    //       name: "Sulfuras, Hand of Ragnaros",
    //       sellIn: 1,
    //       quality: 1,
    //     }
    //     const gildedRose = new Shop([item]);
    //
    //     const updatedItems = gildedRose.updateQuality();
    //
    //     expect(updatedItems[0].quality).toEqual(1);
    //     expect(updatedItems[0].sellIn).toEqual(1);
    //   })
    //   it('Quality and SellIn remains the same', () => {
    //     const item = {
    //       name: "Sulfuras, Hand of Ragnaros",
    //       sellIn: -1,
    //       quality: 50,
    //     }
    //     const gildedRose = new Shop([item]);
    //
    //     const updatedItems = gildedRose.updateQuality();
    //
    //     expect(updatedItems[0].quality).toEqual(50);
    //     expect(updatedItems[0].sellIn).toEqual(-1);
    //   });
    // });
    // describe('When name is Aged Brie', () => {
    //   describe('When quality is 50', () => {
    //     it('only reduces sellIn', () => {
    //       const item = {
    //         name: "Aged Brie",
    //         sellIn: 10,
    //         quality: 50,
    //       }
    //       const gildedRose = new Shop([item]);
    //
    //       const updatedItems = gildedRose.updateQuality();
    //
    //       expect(updatedItems[0].quality).toEqual(50);
    //       expect(updatedItems[0].sellIn).toEqual(9);
    //     });
    //   });
    //   describe('When quality is under 50', () => {
    //     it('increases quality and reduces sellIn', () => {
    //       const item = {
    //         name: "Aged Brie",
    //         sellIn: 3,
    //         quality: 30,
    //       }
    //       const gildedRose = new Shop([item]);
    //
    //       const updatedItems = gildedRose.updateQuality();
    //
    //       expect(updatedItems[0].quality).toEqual(31);
    //       expect(updatedItems[0].sellIn).toEqual(2);
    //     });
    //   });
    // });
    // describe('When name is Backstage passes', () => {
    //   describe('When sell by date has passed', () => {
    //     it('sets quality to 0 and reduces sellIn', () => {
    //       const item = {
    //         name: "Backstage passes to a TAFKAL80ETC concert",
    //         sellIn: 0,
    //         quality: 30,
    //       }
    //       const gildedRose = new Shop([item]);
    //
    //       const updatedItems = gildedRose.updateQuality();
    //
    //       expect(updatedItems[0].quality).toEqual(0);
    //       expect(updatedItems[0].sellIn).toEqual(-1);
    //     });
    //   });
    //   describe('When concert is in 1-5 days', () => {
    //     describe('When quality is under 48', () => {
    //       it('triples the quality added and reduces sellIn', () => {
    //         const item = {
    //           name: "Backstage passes to a TAFKAL80ETC concert",
    //           sellIn: 1,
    //           quality: 47,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(50);
    //         expect(updatedItems[0].sellIn).toEqual(0);
    //       });
    //       it('triples the quality and reduces sellIn', () => {
    //         const item = {
    //           name: "Backstage passes to a TAFKAL80ETC concert",
    //           sellIn: 5,
    //           quality: 47,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(50);
    //         expect(updatedItems[0].sellIn).toEqual(4);
    //       });
    //     });
    //     describe('When quality is over 47', () => {
    //       it('sets quality to 50 and reduces sellIn', () => {
    //         const item = {
    //           name: "Backstage passes to a TAFKAL80ETC concert",
    //           sellIn: 5,
    //           quality: 48,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(50);
    //         expect(updatedItems[0].sellIn).toEqual(4);
    //       });
    //     });
    //   });
    //   describe('When concert is in 6-10 days', () => {
    //     describe('When quality is under 49', () => {
    //       it('doubles the quality added and reduces the sellIn', () => {
    //         const item = {
    //           name: "Backstage passes to a TAFKAL80ETC concert",
    //           sellIn: 6,
    //           quality: 48,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(50);
    //         expect(updatedItems[0].sellIn).toEqual(5);
    //       });
    //       it('doubles the quality added and reduces the sellIn', () => {
    //         const item = {
    //           name: "Backstage passes to a TAFKAL80ETC concert",
    //           sellIn: 10,
    //           quality: 48,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(50);
    //         expect(updatedItems[0].sellIn).toEqual(9);
    //       });
    //     });
    //     describe('When quality is over 48', () => {
    //       it('sets quality to 50 and reduces sellIn', () => {
    //         const item = {
    //           name: "Backstage passes to a TAFKAL80ETC concert",
    //           sellIn: 6,
    //           quality: 49,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(50);
    //         expect(updatedItems[0].sellIn).toEqual(5);
    //       });
    //     });
    //   });
    //   describe('When concert is over 10 days away', () => {
    //     describe('When quality is under 50', () => {
    //       it('increases quality by 1 and reduces sellIn', () => {
    //         const item = {
    //           name: "Backstage passes to a TAFKAL80ETC concert",
    //           sellIn: 11,
    //           quality: 49,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(50);
    //         expect(updatedItems[0].sellIn).toEqual(10);
    //       });
    //     });
    //     describe('When quality is 50', () => {
    //       it('isets quality to 50 and reduces sellIn', () => {
    //         const item = {
    //           name: "Backstage passes to a TAFKAL80ETC concert",
    //           sellIn: 11,
    //           quality: 50,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(50);
    //         expect(updatedItems[0].sellIn).toEqual(10);
    //       });
    //     });
    //   });
    // });
    describe('When name is Conjured', () => {
      describe('When sell by date has passed', () => {
        describe('When quality is 4 or higher', () => {
    //       it('Degrades quality by 4 & sellIn by 1', () => {
    //         const item = {
    //           name: 'Conjured',
    //           sellIn: -1,
    //           quality: 10,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(6);
    //         expect(updatedItems[0].sellIn).toEqual(-2);
    //       });
        });
    //     describe('When quality is 0', () => {
    //       it('Only reduces the sellin by 1', () => {
    //         const item = {
    //           name: 'Conjured',
    //           sellIn: -1,
    //           quality: 0,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(0);
    //         expect(updatedItems[0].sellIn).toEqual(-2);
    //       });
    //     });
    //     describe('When quality is 1', () => {
    //       it('reduces quality to 0', () => {
    //         const item = {
    //           name: 'Conjured',
    //           sellIn: -1,
    //           quality: 1,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(0);
    //         expect(updatedItems[0].sellIn).toEqual(-2);
    //       });
    //     });
    //     describe('When quality is 3', () => {
    //       it('reduces quality to 0', () => {
    //         const item = {
    //           name: 'Conjured',
    //           sellIn: -1,
    //           quality: 3,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(0);
    //         expect(updatedItems[0].sellIn).toEqual(-2);
    //       });
    //     });
      });
    //   describe('When sell by date has not passed', () => {
    //     describe('When quality is 0', () => {
    //       it('Only reduces sellIn by 1', () => {
    //         const item = {
    //           name: 'Conjured',
    //           sellIn: 1,
    //           quality: 0,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(0);
    //         expect(updatedItems[0].sellIn).toEqual(0);
    //       });
    //     });
    //     describe('When quality is 1', () => {
    //       it('reduces quality to 0 and sellIn by 1', () => {
    //         const item = {
    //           name: 'Conjured',
    //           sellIn: 1,
    //           quality: 1,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(0);
    //         expect(updatedItems[0].sellIn).toEqual(0);
    //       });
    //     });
    //     describe('When quality is 2 or higher', () => {
    //       it('reduces quality by 2 and sellIn by 1', () => {
    //         const item = {
    //           name: 'Conjured',
    //           sellIn: 1,
    //           quality: 2,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(0);
    //         expect(updatedItems[0].sellIn).toEqual(0);
    //       });
    //       it('reduces quality by 2 and sellIn by 1', () => {
    //         const item = {
    //           name: 'Conjured',
    //           sellIn: 1,
    //           quality: 3,
    //         }
    //         const gildedRose = new Shop([item]);
    //
    //         const updatedItems = gildedRose.updateQuality();
    //
    //         expect(updatedItems[0].quality).toEqual(1);
    //         expect(updatedItems[0].sellIn).toEqual(0);
    //       });
    //     });
    //   });
    });
  });
});
