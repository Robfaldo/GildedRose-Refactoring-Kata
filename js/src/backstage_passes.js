class BackstagePasses {
  constructor(item) {
    this.name = item.name;
    this.sellIn = item.sellIn;
    this.quality = item.quality;
  }

  update() {
    this.quality += 1;
    if (this.sellIn >= 1 && this.sellIn <= 5) {
      this.quality += 2;
    }
    if (this.sellIn >= 6 && this.sellIn <= 10) {
      this.quality += 1;
    }
    if (this.quality > 50) this.quality = 50;
    if (this.sellIn <= 0) this.quality = 0;
    this.sellIn -= 1;
    return this;
  }
}
