# Bank-test tech test
==================

## Instructions:  

Requirements
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

The initial (link to github repo [here](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/master/js))
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

Initial tests
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

Fork this repo and clone to your local machine (assumes you have NodeJs installed)

```
> npm install
```

## Running tests

Run
``` npm test ```
from the root directory

## Usage

Create a new account
```
const account = new Account();
```
Deposit money
```
account.deposit(150);
```
Withdraw money
```
account.withdraw(50);
```
Check balance
```
account.balance;
```
Print statement
```
account.printStatement()
>>> [ 'date || credit || debit || balance',
  '16/07/2018 || 50.00 || || 200.00',
  '16/07/2018 || 150.00 || || 150.00' ]
```

## Tech/Framework used

* __Javascript__ (2.4.1)
* __nodejs__
* __sinon__ for stubbing
* __mocha__ for testing

## Approach:

1. Turn the requirements into user stories

```
As a customer,
So that I can add funds to my account,
I need to be able to make a deposit.
```
```

As a customer,
So that I can access the funds in my account,
I need to be able to make a withdrawal.
```
```
As a customer,
So that I can see my previous transactions and account balance,
I need to be able to print my account statement.
```
2. Quick diagram of suspected objects and messages
3. Write feature test (Feature - Red)
4. Get a matching failure at the unit test level (Red)
5. Implement the behaviour (Green)
6. Refactor
7. Repeat 4-6 until feature test passing (Feature - Green)
8. Refactor

Design:

In my diagram, before coding, I had a Customer, Account and Printer class. When I wrote my feature test, I felt that I didn't need a customer class to match the specification & requirements (although obviously this would be needed in a real life situation).

As part of my refactoring, I took 2 big responsibilities out of my Account class - the responsibility of formatting transactions into the string that is stored in transaction history and the responsibility of combining all the transactions with a header (printing).

I was comfortable that Account had the responsibility of withdrawing, depositing and returning (printing) the final statement.
