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
      if(this._isNormalName(this.items[i].name)) {
        this.items[i] = new Normal(this.items[i]);
      }
    }
  }

  updateQuality() {

    for (var i = 0; i < this.items.length; i++) {

      if (this._isNormalName(this.items[i].name)) {
        this.items[i].update();
        return this.items;
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

  _isNormalName(name) {
    return name != 'Aged Brie'
      && name != 'Backstage passes to a TAFKAL80ETC concert'
      && name != 'Sulfuras, Hand of Ragnaros'
      && name != 'Conjured'
  }

}

module.exports = Shop
