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
      this.items[i].update();
      return this.items;
    }
  }
}

module.exports = Shop
