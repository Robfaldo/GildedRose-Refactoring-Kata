class AgedBrie {
  constructor(item) {
    this.name = item.name;
    this.sellIn = item.sellIn;
    this.quality = item.quality;
  }

  update() {
    this.sellIn -= 1;
    if (this.quality < 50) this.quality += 1;
    return this
  }
}
