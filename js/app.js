'use strict'

var lastGroup = [];
var thisGroup = [];
var busMallItems = [];

function catalogItem ( itemId, itemName, itemFilepath) {
    this.itemId = itemId;
    this.itemName = itemName;
    this.itemFilepath = itemFilepath;
    this.noTimesShown = 0;
    this.noTimesClicked = 0;
    busMallItems.push(this);
}

function () {
    var bag = new catalogItem( 'bag', 'Bag', '../imgs/newbag.jpg' );
    var banana = new catalogItem ( 'banana', 'Banana', '../imgs/newbanana.jpg' );
    var bathroom = new catalogItem ( 'bathroom', 'Bathroom', '../imgs/newbathroom.jpg' );
    var boots = new catalogItem ( 'boots', 'Boots', '../imgs/newboots.jpg' );
    var breakfast = new catalogItem ( 'breakfast', 'Breakfast', '../imgs/newbreakfast.jpg' );
    var bubblegum = new catalogItem ( 'bubblegum', 'Bubblegum', '../imgs/newbubblegum.jpg' );
    var chair = new catalogItem ( 'chair', 'Chair', '../imgs/newchair.jpg' );
    var cthulhu = new catalogItem ( 'cthulhu', 'Cthulhu', '../imgs/newcthulhu.jpg' );
    var dogduck = new catalogItem ( 'dogduck', 'Dog-Duck', '../imgs/newdog-duck.jpg' );
    var pen = new catalogItem ( 'pen', 'Pen', '../imgs/newpen.jpg' );
    var petsweep = new catalogItem ( 'petsweep', 'Pet Sweep', '../imgs/newpet-sweep.jpg' );
    var scissors = new catalogItem ( 'scissors', 'Scissors', '../imgs/newscissors.jpg' );
    var shark = new catalogItem ( 'shark', 'Shark', '../imgs/newshark.jpg' );
    var sweep = new catalogItem ( 'sweep', 'Sweep', '../imgs/newsweep.png' );
    var tauntaun = new catalogItem ( 'tauntaun', 'Tauntaun', '../imgs/newtauntaun.jpg' );
    var unicorn = new catalogItem ( 'unicorn', 'Unicorn', '../imgs/newunicorn.jpg' );
    var usb = new catalogItem ( 'usb', 'USB', '../imgs/newusb.gif' );
    var watercan = new catalogItem ( 'watercan', 'Water Can', '../imgs/newwater-can.jpg' );
    var wineglass = new catalogItem ( 'wineglass', 'Wine Glass', '../imgs/newwine-glass.jpg' );
};

console.log( busMallItems[0], busMallItems[14]);
busMallItems;