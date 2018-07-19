class Shop {
  constructor(items=[]){
    this.items = items;

    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].name === 'Conjured') {
        this.items[i] = new Conjured(this.items[i]);
      }
      if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i] = new BackstagePasses(this.items[i]);
      }
      if(this.items[i].name === 'Aged Brie') {
        this.items[i] = new AgedBrie(this.items[i]);
      }
    }
  }

  updateQuality() {

    for (var i = 0; i < this.items.length; i++) {

      if (this._isNonSpecialName(this.items[i].name)) {
        return this._nonSpecialUpdate(this.items[i]);
      }

      if (this.items[i].name === 'Aged Brie') {
        this.items[i].update();
        return this.items;
      }

      if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i].update();
        return this.items;
      }

      if(this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        return this.items
      }

      if(this.items[i].name === 'Conjured') {
        this.items[i].update()
        return this.items;
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
    if (item.quality > 0) item.quality -= 1;
    if (item.quality > 0 && item.sellIn < 0) {
      item.quality -= 1;
    }
    item.sellIn -= 1;
    return this.items;
  }

}

module.exports = Shop
