class Shop {
  constructor(items=[], itemNames = true){
    this.items = [];
    this.itemNamesLookup = {
      'Conjured': Conjured,
      'Backstage passes to a TAFKAL80ETC concert': BackstagePasses,
      'Aged Brie': AgedBrie,
      'Sulfuras, Hand of Ragnaros': Sulfuras
    }

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
    var lookupReturn = this.itemNamesLookup[item.name]
    return lookupReturn === undefined ? Normal : lookupReturn
  }
}

module.exports = Shop
