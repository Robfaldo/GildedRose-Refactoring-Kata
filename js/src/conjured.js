class Conjured {
  constructor(item) {
    this.name = item.name;
    this.sellIn = item.sellIn;
    this.quality = item.quality;
  }

  update() {
    this.sellIn -= 1;
    return this;
  }
}

module.exports = Conjured;
