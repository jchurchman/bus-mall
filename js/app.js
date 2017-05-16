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
    randomIndicies: [],
    randoNo: 0,
    getRandomIndicies: function () {
        this.randoNo = (Math.floor(Math.random() * busMallItems.length));
        console.log( 'randoNo is ' + this.randoNo );
    },
    trackThisGroup: this.nowGroup = this.lastGroup,
    resetThisGroup: this.nowGroup = [],
    checkLastGroup: function () {
        console.log( (this.lastGroup.indexOf( this.randoNo ) === -1 ) );
        return (this.lastGroup.indexOf( this.randoNo ) === -1 );
    },
    checkNowGroup: function () {
        console.log( (this.nowGroup.indexOf( this.randoNo ) === -1) );
        return (this.nowGroup.indexOf( this.randoNo ) === -1);
    },
    fillRandomIndicies: function () {
        while ( this.nowGroup.length < 3) {
            this.getRandomIndicies();
            if ( (this.nowGroup.length === 0) && (this.checkLastGroup() === true) ) {
                this.nowGroup.push( this.randoNo );
                this.randoNo = 0;
                this.nowGroup;
                console.log( 'this.nowGroup is ' + this.nowGroup );
            } else if ( (this.checkLastGroup() === true) && (this.checkNowGroup() === true) ) {
                this.nowGroup.push( this.randoNo );
                this.randoNo = 0;
                this.nowGroup;
                console.log( 'this.nowGroup is ' + this.nowGroup );
            } else {
                console.log('it matched somewhere ');
            }

        }
    }
};



// function doAllTheWork () {
    
//     var randomIndecies = [];
//     while ( randomIndecies.length < 3 ) {
//         var getRandomIndecies = (Math.floor(Math.random() * busMallItems.length)); /* Generates random index number within array length of busMallItems */
//         if ( thisGroup.length === 0 ) {
//             for (var i=0; i < lastGroup.length; i++){
//                 if ( getRandomIndecies === lastGroup[i] ) {
//                     break;
//                 } else {
//                     thisGroup.push ( getRandomIndecies );
//                 }
//             }
//             }
//         do {
//             for (var j = 0; j < lastGroup.length; j++) {
//                 if (getRandomIndecies === lastGroup[j]) {
//                     break;
//                 } else {
//                     for (var k = 0; k < thisGroup.length; k++) {
//                         if (getRandomIndecies === thisGroup[k]) {
//                             break;
//                         } else {
//                             thisGroup.push(getRandomIndecies);
//                             break;
//                         }
//                     }
//                 }
//             }
//         } while (thisGroup.length < 3);
//     }
//     for (var l = 0; l < 3; l++) {
//         var imageLoc = document.getElementsByClassName('optionImage')[l];  /*grabs an image tag with the class */
//         var wordLoc = document.getElementsByClassName('optionName')[l];  /*grabs a fig caption tag by class */
//         var imgSrc = busMallItems[randomIndecies[l]].itemFilepath; /* grabs an image filepath referenced by index */
//         var nameLoc = busMallItems[randomIndecies[l]].itemName; /* grabs an item name referenced by index */
//         imageLoc.src=imgSrc; /*appends an image filepath to the image src */
//         wordLoc.textContent = nameLoc; /* adds the image name to the fig caption */
//         busMallItems[randomIndecies[l]].noTimesShown = busMallItems[randomIndecies[l]].noTimesShown + 1; /* adds one to the times shown property of the item manipulated by this loop */
//     }

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
