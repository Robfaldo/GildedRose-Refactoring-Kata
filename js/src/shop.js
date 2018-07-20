class Shop {
  constructor(items=[]){
    this.items = items;

    for (var i = 0; i < this.items.length; i++) {
      var className;
      switch(this.items[i].name) {
        case 'Conjured':
            className = Conjured
            break;
        case 'Backstage passes to a TAFKAL80ETC concert':
            className = BackstagePasses
            break;
        case 'Aged Brie':
            className = AgedBrie
            break;
        case 'Sulfuras, Hand of Ragnaros':
            className = Sulfuras
            break;
        default:
            className = Normal
      }
      this.items[i] = new className(this.items[i]);
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
        this.items[i].update();
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
