class Normal {
  constructor(item) {
    this.name = item.name;
    this.sellIn = item.sellIn;
    this.quality = item.quality;
  }
  update() {
    if (this.quality > 0) this.quality -= 1;
    if (this.quality > 0 && this.sellIn < 0) {
      this.quality -= 1;
    }
    this.sellIn -= 1;
    return this;
  }
}
