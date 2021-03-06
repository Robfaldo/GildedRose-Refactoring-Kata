class ItemNameLookup {
  constructor() {
    this.nameMatcher = {
      'Conjured': Conjured,
      'Backstage passes to a TAFKAL80ETC concert': BackstagePasses,
      'Aged Brie': AgedBrie,
      'Sulfuras, Hand of Ragnaros': Sulfuras
    }
  }

  match(name) {
    var lookupReturn = this.nameMatcher[name];
    return lookupReturn === undefined ? Normal : lookupReturn
  }
}
