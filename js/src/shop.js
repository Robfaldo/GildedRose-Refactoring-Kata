class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      if (this._isNonSpecialName(this.items[i].name)) {
        return this._nonSpecialUpdate(this.items[i]);
      }

      if (this.items[i].name === 'Aged Brie') {
        return this._agedBrieUpdate(this.items[i]);
      }

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

  _isNonSpecialName(name) {
    return name != 'Aged Brie' && name != 'Backstage passes to a TAFKAL80ETC concert' && name != 'Sulfuras, Hand of Ragnaros'
  }

  _nonSpecialUpdate(item) {
    item.sellIn -= 1;
    if (item.quality > 0) item.quality -= 1;
    if (item.quality > 0 && item.sellIn < 0) {
      item.quality -= 1;
    }
    return this.items;
  }

  _agedBrieUpdate(item) {
    item.sellIn -= 1;
    if (item.quality < 50) item.quality += 1;
    return this.items
  }


}

module.exports = Shop
