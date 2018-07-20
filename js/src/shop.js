class Shop {
  constructor(items=[]){
    this.items = [];

    for (var i = 0; i < items.length; i++) {
      var className = this._getClassName(items[i]);
      var newItem = new className(items[i]);
      this.items.push(newItem);
    }
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].update();
    }
    return this.items;
  }
  _getClassName(item) {
    switch(item.name) {
      case 'Conjured':
          return Conjured
          break;
      case 'Backstage passes to a TAFKAL80ETC concert':
          return BackstagePasses
          break;
      case 'Aged Brie':
          return AgedBrie
          break;
      case 'Sulfuras, Hand of Ragnaros':
          return Sulfuras
          break;
      default:
          return Normal
    }
  }
}

module.exports = Shop
