# Gilded-Rose-Kata
==================

## Instructions:  

__Requirements__
```
*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
We have recently signed a supplier of conjured items. This requires an update to our system:

“Conjured” items degrade in Quality twice as fast as normal items
Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."*
```

__The initial code for Shop class__
```
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
    return this.items;
  }
}
```
Github repo [here](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/master/js)

__Initial tests__
```
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });

});
```

## Getting started

All you need to do is to clone this repo to your local machine.

## Running tests

Open the SpecRunner.html file and the tests will run in the browser automatically.

## Usage

<img src="/js/Images/usage_image.png" />

## Tech/Framework used

* __Javascript__
* __Jasmine__ for testing

## Approach:

### Understanding the legacy code & tests
I looked through the legacy code, test and requirements. I decided to write tests covering all the current behaviour so that I could confidently refactor.

1. I took these behaviours:

```
Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
```

And turned them into this diagram (Conjured also added to diagram but not yet translated to tests):

<img src="/js/Images/gilded_rose_diagram.png" />

2. I turned this diagram into 17 tests covering all the current behaviour (commit of adding last test [here](https://github.com/Robfaldo/GildedRose-Refactoring-Kata/blob/3f45a6e975b9de00f07fc99047f437f4b501f946/js/spec/shop_spec.js))

### Refactoring

Before adding the Conjured item, I decided to refactor the current code from being one long method with nested conditionals to individual methods for each type of item.

This resulted in [this](https://github.com/Robfaldo/GildedRose-Refactoring-Kata/tree/0f39fc894395bb668f269edfd593a8b70c94d4b7/js) commit, where each item has its own method to update.

__Shop code at this point:__
```
class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      if (this._isNonSpecialName(this.items[i].name)) {
        return this._nonSpecialUpdate(this.items[i]);
      }

      if (this.items[i].name === 'Aged Brie') {
        return this._agedBrieUpdate(this.items[i]);
      }

      if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        return this._backstagePassesUpdate(this.items[i]);
      }

      if(this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        return this.items
      }
    }
  }

  _isNonSpecialName(name) {
    return name != 'Aged Brie' && name != 'Backstage passes to a TAFKAL80ETC concert' && name != 'Sulfuras, Hand of Ragnaros'
  }

  _nonSpecialUpdate(item) {
    item.sellIn -= 1;
    if (item.quality > 0) item.quality -= 1;
    if (item.quality > 0 && item.sellIn < 0) {
      item.quality -= 1;
    }
    return this.items;
  }

  _agedBrieUpdate(item) {
    item.sellIn -= 1;
    if (item.quality < 50) item.quality += 1;
    return this.items
  }

  _backstagePassesUpdate(item) {
    if (item.sellIn <= 0) item.quality = 0;

    if (item.sellIn >= 1 && item.sellIn <= 5) {
      if (item.quality > 47) item.quality = 50
      if (item.quality < 48) item.quality += 3;
    }

    if (item.sellIn >= 6 && item.sellIn <= 10) {
      if (item.quality > 48) item.quality = 50;
      if (item.quality < 49) item.quality += 2;
    }

    if (item.sellIn > 10 && item.quality < 50) {
      item.quality += 1;
    }

    item.sellIn -= 1;
    return this.items;
  }
}

module.exports = Shop
```
### Implement the new behaviour

It had taken a lot of time to get to this point, so in order to get a working solution out I decided to add Conjured now and consider design afterwards if I had time.

Commit of after adding Conjured to Shop can be found [here](https://github.com/Robfaldo/GildedRose-Refactoring-Kata/tree/1799d826baa37f22a848f2a4d15541466dbb9080/js)

__Shop code at this point:__
```
class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      if (this._isNonSpecialName(this.items[i].name)) {
        return this._nonSpecialUpdate(this.items[i]);
      }

      if (this.items[i].name === 'Aged Brie') {
        return this._agedBrieUpdate(this.items[i]);
      }

      if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        return this._backstagePassesUpdate(this.items[i]);
      }

      if(this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        return this.items
      }

      if(this.items[i].name === 'Conjured') {
        return this._conjuredUpdate(this.items[i]);
      }

    }
  }

  _isNonSpecialName(name) {
    return name != 'Aged Brie'
      && name != 'Backstage passes to a TAFKAL80ETC concert'
      && name != 'Sulfuras, Hand of Ragnaros'
      && name != 'Conjured'
  }

  _nonSpecialUpdate(item) {
    if (item.quality > 0) item.quality -= 1;
    if (item.quality > 0 && item.sellIn < 0) {
      item.quality -= 1;
    }
    item.sellIn -= 1;
    return this.items;
  }

  _conjuredUpdate(item) {
    if (item.quality != 0) {
      if (item.sellIn >= 0) item.quality -= 2;
      if (item.sellIn < 0) item.quality -= 4;
    }
    if (item.quality < 0) item.quality = 0;
    item.sellIn -= 1;
    return this.items;
  }

  _agedBrieUpdate(item) {
    item.sellIn -= 1;
    if (item.quality < 50) item.quality += 1;
    return this.items
  }

  _backstagePassesUpdate(item) {
    item.quality += 1;
    if (item.sellIn >= 1 && item.sellIn <= 5) {
      item.quality += 2;
    }
    if (item.sellIn >= 6 && item.sellIn <= 10) {
      item.quality += 1;
    }
    if (item.quality > 50) item.quality = 50;
    if (item.sellIn <= 0) item.quality = 0;
    item.sellIn -= 1;
    return this.items;
  }
}
```

#### Refactoring the refactor (and design pattern)

Now my code was much clearer, it was well tested and it had all the functionality that was required however I only had 2 classes, with 1 of them doing 95% of the work.  

I decided to look into design patterns that I could use, and settled on the __function factory__. It's the first time I've implemented this.

I TDD'd each item as a class (e.g. Conjured class), with each instance of that class having an update method. I could then create an instance of the class from inside the Shop constructor (so that shop became an 'item' factory). Then I could invoke the '.update' method on each item in the items list when Shop's updateQuality() was invoked.

Once I got this functionality working, my code looked like this:
```
class Shop {
  constructor(items=[]){
    this.items = items;

    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].name === 'Conjured') {
        this.items[i] = new Conjured(this.items[i]);
      }
      if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i] = new BackstagePasses(this.items[i]);
      }
      if(this.items[i].name === 'Aged Brie') {
        this.items[i] = new AgedBrie(this.items[i]);
      }
      if(this._isNormalName(this.items[i].name)) {
        this.items[i] = new Normal(this.items[i]);
      }
      if(this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        this.items[i] = new Sulfuras(this.items[i]);
      }
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this._isNormalName(this.items[i].name)) {
        this.items[i].update();
        return this.items;
      }
      if (this.items[i].name === 'Aged Brie') {
        this.items[i].update();
        return this.items;
      }
      if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i].update();
        return this.items;
      }
      if(this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        this.items[i].update();
        return this.items
      }
      if(this.items[i].name === 'Conjured') {
        this.items[i].update()
        return this.items;
      }
    }
  }

  _isNormalName(name) {
    return name != 'Aged Brie'
      && name != 'Backstage passes to a TAFKAL80ETC concert'
      && name != 'Sulfuras, Hand of Ragnaros'
      && name != 'Conjured'
  }
}

module.exports = Shop
```
Full github repo [here](https://github.com/Robfaldo/GildedRose-Refactoring-Kata/tree/344712a44938a1e4134f428ba2e84c0df9d6747b/js)

I did one big refactor on this which gave me my final code:

```
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
```
Github repo [here](https://github.com/Robfaldo/GildedRose-Refactoring-Kata/tree/master/js)
