class Conjured {
  constructor(item) {
    this.name = item.name;
    this.sellIn = item.sellIn;
    this.quality = item.quality;
    return this;
  }
  update() {
    if (this.quality != 0) {
      this.sellIn < 0 ? this.quality -= 4 : this.quality -= 2
    }
    if (this.quality < 0) this.quality = 0;
    this.sellIn -= 1;
    return this;
  }
}

module.exports = Conjured;
