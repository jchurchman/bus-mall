'use strict';

var busMallItems = [];

function catalogItem ( itemId, itemName, itemFilepath) {
    this.itemId = itemId;
    this.itemName = itemName;
    this.itemFilepath = itemFilepath;
    this.noTimesShown = 0;
    this.noTimesClicked = 0;
    busMallItems.push(this);
}

function instantiateOptions() {
    var bag = new catalogItem( 'bag', 'Bag', './imgs/newbag.jpg' );
    var banana = new catalogItem ( 'banana', 'Banana', './imgs/newbanana.jpg' );
    var bathroom = new catalogItem ( 'bathroom', 'Bathroom', './imgs/newbathroom.jpg' );
    var boots = new catalogItem ( 'boots', 'Boots', './imgs/newboots.jpg' );
    var breakfast = new catalogItem ( 'breakfast', 'Breakfast', './imgs/newbreakfast.jpg' );
    var bubblegum = new catalogItem ( 'bubblegum', 'Bubblegum', './imgs/newbubblegum.jpg' );
    var chair = new catalogItem ( 'chair', 'Chair', './imgs/newchair.jpg' );
    var cthulhu = new catalogItem ( 'cthulhu', 'Cthulhu', './imgs/newcthulhu.jpg' );
    var dogduck = new catalogItem ( 'dogduck', 'Dog-Duck', './imgs/newdog-duck.jpg' );
    var pen = new catalogItem ( 'pen', 'Pen', './imgs/newpen.jpg' );
    var petsweep = new catalogItem ( 'petsweep', 'Pet Sweep', './imgs/newpet-sweep.jpg' );
    var scissors = new catalogItem ( 'scissors', 'Scissors', './imgs/newscissors.jpg' );
    var shark = new catalogItem ( 'shark', 'Shark', './imgs/newshark.jpg' );
    var sweep = new catalogItem ( 'sweep', 'Sweep', './imgs/newsweep.png' );
    var tauntaun = new catalogItem ( 'tauntaun', 'Tauntaun', './imgs/newtauntaun.jpg' );
    var unicorn = new catalogItem ( 'unicorn', 'Unicorn', './imgs/newunicorn.jpg' );
    var usb = new catalogItem ( 'usb', 'USB', './imgs/newusb.gif' );
    var watercan = new catalogItem ( 'watercan', 'Water Can', './imgs/newwater-can.jpg' );
    var wineglass = new catalogItem ( 'wineglass', 'Wine Glass', './imgs/newwine-glass.jpg' );
}

var doAllTheWork = {
    lastGroup: [],
    nowGroup: [],
    randoNo: 0,
    getRandomIndicies: function () {
        this.randoNo = (Math.floor(Math.random() * busMallItems.length));
    },
    trackThisGroup: function () {
        this.lastGroup = this.nowGroup;
    },
    resetThisGroup: function () {
        this.nowGroup = [];
    },
    checkLastGroup: function () {
        return (this.lastGroup.indexOf( this.randoNo ) === -1 );
    },
    checkNowGroup: function () {
        return (this.nowGroup.indexOf( this.randoNo ) === -1);
    },
    fillRandomIndicies: function () {
        while ( this.nowGroup.length < 3) {
            this.getRandomIndicies();
            if ( (this.nowGroup.length === 0) && (this.checkLastGroup() === true) ) {
                this.nowGroup.push( this.randoNo );
                this.randoNo = 0;
            } else if ( (this.checkLastGroup() === true) && (this.checkNowGroup() === true) ) {
                this.nowGroup.push( this.randoNo );
                this.randoNo = 0;

            } else {
                console.log('it matched somewhere ');
            }
        }
    },
    populateOptions: function () {
        for ( var i = 0; i < this.nowGroup.length; i++ ) {
            var imageLoc = document.getElementsByClassName('optionImage')[i];  /*grabs an image tag with the class */
            console.log( 'imageLoc is ' + imageLoc );
            var wordLoc = document.getElementsByClassName('optionName')[i];  /*grabs a fig caption tag by class */
            console.log( 'wordLoc is ' + wordLoc );
            var imgSrc = busMallItems[this.nowGroup[i]].itemFilepath; /* grabs an image filepath referenced by index */
            console.log( 'imgSrc is ' + imgSrc );
            var nameLoc = busMallItems[this.nowGroup[i]].itemName; /* grabs an item name referenced by index */
            console.log( 'nameLoc is ' + nameLoc );
            imageLoc.src=imgSrc; /*appends an image filepath to the image src */
            wordLoc.textContent = nameLoc; /* adds the image name to the fig caption */
            // console.log( 'this.nowGroup[i] is ' + this.nowGroup[i] );
            // console.log( 'busMallItems[this.nowGroup[i]] is ' + busMallItems[this.nowGroup[i]] );
            // console.log( 'busMallItems[this.nowGroup[i]].noTimesShown is ' + busMallItems[this.nowGroup[i]].noTimesShown );
            // busMallItems[this.nowGroup[i]].noTimesShown = busMallItems[this.nowGroupi[i]].noTimesShown + 1; /* adds one to the times shown property of the item manipulated by this loop */
            }
            this.trackThisGroup();
            this.resetThisGroup();
    }
};


//     for (var l = 0; l < 3; l++) {

//     lastGroup=thisGroup;
//     thisGroup=[];
//     }


// catalogItem.prototype.displayOptions = function () {
//     var randomOptions = this.getIndecies( busMallItems );
//     var index1 = randomOptions[0];
//     var index2 = randomOptions[1];
//     var index3 = randomOptions[2];

//     var option1 = busMallItems[index1];
//     var option2 = busMallItems[index2];
//     var option3 = busMallItems[index3];

//     this.option1.innerText = option1.itemName;
//     this.option2.innerText = option2.itemName;
//     this.option3.innerText = option3.itemName;
// };

// var selectOption = document.getElementById( 'eventSite' );
// selectOption.addEventListener( 'click', voteHandler );
// var votes = 0;

// function voteHandler ( event ) {
//     event.preventDefault();
//     while (votes < 24) {
//     doAllTheWork();
//     votes = votes + 1;
//     }
// }

instantiateOptions();
