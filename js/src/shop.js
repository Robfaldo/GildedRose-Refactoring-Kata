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

      if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        return this._backstagePassesUpdate(this.items[i]);
      }

      if(this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        return this.items
      }

      if(this.items[i].name === 'Conjured') {
        return this._conjuredUpdate(this.items[i]);
      }

    }
  }

  _isNonSpecialName(name) {
    return name != 'Aged Brie'
      && name != 'Backstage passes to a TAFKAL80ETC concert'
      && name != 'Sulfuras, Hand of Ragnaros'
      && name != 'Conjured'
  }

  _nonSpecialUpdate(item) {
    item.sellIn -= 1;
    if (item.quality > 0) item.quality -= 1;
    if (item.quality > 0 && item.sellIn < 0) {
      item.quality -= 1;
    }
    return this.items;
  }

  _conjuredUpdate(item) {
    item.sellIn -= 1;
    if (item.quality != 0) {
      if (item.quality - 4 >= 0) item.quality -= 4;
      if (item.quality > 0 && item.quality < 4) {
        item.quality = 0;
      }
    }
    return this.items;
  }

  _agedBrieUpdate(item) {
    item.sellIn -= 1;
    if (item.quality < 50) item.quality += 1;
    return this.items
  }

  _backstagePassesUpdate(item) {
    if (item.sellIn <= 0) item.quality = 0;

    if (item.sellIn >= 1 && item.sellIn <= 5) {
      if (item.quality > 47) item.quality = 50
      if (item.quality < 48) item.quality += 3;
    }

    if (item.sellIn >= 6 && item.sellIn <= 10) {
      if (item.quality > 48) item.quality = 50;
      if (item.quality < 49) item.quality += 2;
    }

    if (item.sellIn > 10 && item.quality < 50) {
      item.quality += 1;
    }

    item.sellIn -= 1;
    return this.items;
  }
}

module.exports = Shop
