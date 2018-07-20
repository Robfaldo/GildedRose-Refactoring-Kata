class Shop {
  constructor(items=[], itemNames = new ItemNameLookup()){
    this.items = [];
    this.itemNameLookup = itemNames;

    for (var i = 0; i < items.length; i++) {
      var className = this.itemNameLookup.match(items[i].name);
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
}


module.exports = Shop
