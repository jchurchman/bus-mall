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
            } 
        }
    },
    populateOptions: function () {
        for ( var i = 0; i < this.nowGroup.length; i++ ) {
            var imageLoc = document.getElementsByClassName('optionImage')[i];  /*grabs an image tag with the class */
            var wordLoc = document.getElementsByClassName('optionName')[i];  /*grabs a fig caption tag by class */
            var imgSrc = busMallItems[this.nowGroup[i]].itemFilepath; /* grabs an image filepath referenced by index */
            var nameLoc = busMallItems[this.nowGroup[i]].itemName; /* grabs an item name referenced by index */
            var imgId = busMallItems[this.nowGroup[i]].itemId;
            imageLoc.id = imgId;
            imageLoc.src=imgSrc; /*appends an image filepath to the image src */
            wordLoc.textContent = nameLoc; /* adds the image name to the fig caption */
            var optionIndex = this.nowGroup[i];
            busMallItems[optionIndex].noTimesShown = busMallItems[optionIndex].noTimesShown + 1; /* adds one to the times shown property of the item manipulated by this loop */
            }
            this.trackThisGroup();
            this.resetThisGroup();
    },
    trackVotes: function () {
        var gotClicked = event.target.id;
        this.lastGroup.forEach(function(element, index) {
            if (busMallItems[doAllTheWork.lastGroup[index]].itemId === gotClicked){
                busMallItems[doAllTheWork.lastGroup[index]].noTimesClicked = busMallItems[doAllTheWork.lastGroup[index]].noTimesClicked + 1;
            }
        });
    }
};

var selectOption = document.getElementById( 'eventSite' );
selectOption.addEventListener( 'click', voteHandler );
var votes = 0;

function voteHandler () {
    event.preventDefault();
    if (votes > 24) {
        var optionNames = [];
        var noTimesShownArray = [];
        var noTimesClickedArray = [];
        busMallItems.forEach(function(item){
            optionNames.push(item.itemName);
            console.log(optionNames);
            noTimesShownArray.push(item.noTimesShown);
            console.log(noTimesShownArray);
            noTimesClickedArray.push(item.noTimesClicked);
            console.log(noTimesClickedArray);
        });
        var context = document.getElementById( 'busMallChart' );
        var busMallChart = new Chart(context, {
            type: 'bar',
            data: {
                labels: optionNames,
                datasets: [{
                    label: '# of times seen',
                    data: noTimesShownArray,
                    backgroundColor: [],
                    borderColor: [],
                    borderWidth: 1
                },
                {
                    label: '# of times clicked',
                    data: noTimesClickedArray,
                    backgroundColor: [],
                    borderColor: [],
                    borderWidth: 1
                }]
            },
            options: { 
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

        return;
    }
    if ( event.target.src ) {
    doAllTheWork.trackVotes();
    doAllTheWork.fillRandomIndicies();
    doAllTheWork.populateOptions();
    votes = votes + 1;
    }
}

instantiateOptions();
