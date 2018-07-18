class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this._reduceQualityBy(1, this.items[i]);
        }
      } else {
        if (this.items[i].quality < 50) {
          this._increaseQualityBy(1, this.items[i]);
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this._increaseQualityBy(1, this.items[i]);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this._increaseQualityBy(1, this.items[i]);
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this._reduceSellIn(this.items[i]);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this._reduceQualityBy(1, this.items[i]);
              }
            }
          } else {
            this._setQualityToZero(this.items[i]);
          }
        }
        // else {
        //   if (this.items[i].quality < 50) {
        //     this.items[i].quality = this.items[i].quality + 1;
        //   }
        // }
      }
    }

    return this.items;
  }

  _increaseQualityBy(number, item) {
    item.quality += number;
  }

  _reduceQualityBy(number, item) {
    item.quality -= number;
  }

  _setQualityToZero(item) {
    item.quality = 0;
  }

  _reduceSellIn(item) {
    item.sellIn -= 1;
  }

}

module.exports = Shop
