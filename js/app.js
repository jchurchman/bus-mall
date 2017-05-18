'use strict';

var busMallItems = [];
var clicks = JSON.parse(localStorage.getItem('storedClicks')) || [];

function catalogItem(itemId, itemName, itemFilepath) {
    this.itemId = itemId;
    this.itemName = itemName;
    this.itemFilepath = itemFilepath;
    this.noTimesShown = 0;
    this.noTimesClicked = 0;
    busMallItems.push(this);
}

function instantiateOptions() {
    var bag = new catalogItem('bag', 'Bag', './imgs/newbag.jpg');
    var banana = new catalogItem('banana', 'Banana', './imgs/newbanana.jpg');
    var bathroom = new catalogItem('bathroom', 'Bathroom', './imgs/newbathroom.jpg');
    var boots = new catalogItem('boots', 'Boots', './imgs/newboots.jpg');
    var breakfast = new catalogItem('breakfast', 'Breakfast', './imgs/newbreakfast.jpg');
    var bubblegum = new catalogItem('bubblegum', 'Bubblegum', './imgs/newbubblegum.jpg');
    var chair = new catalogItem('chair', 'Chair', './imgs/newchair.jpg');
    var cthulhu = new catalogItem('cthulhu', 'Cthulhu', './imgs/newcthulhu.jpg');
    var dogduck = new catalogItem('dogduck', 'Dog-Duck', './imgs/newdog-duck.jpg');
    var pen = new catalogItem('pen', 'Pen', './imgs/newpen.jpg');
    var petsweep = new catalogItem('petsweep', 'Pet Sweep', './imgs/newpet-sweep.jpg');
    var scissors = new catalogItem('scissors', 'Scissors', './imgs/newscissors.jpg');
    var shark = new catalogItem('shark', 'Shark', './imgs/newshark.jpg');
    var sweep = new catalogItem('sweep', 'Sweep', './imgs/newsweep.png');
    var tauntaun = new catalogItem('tauntaun', 'Tauntaun', './imgs/newtauntaun.jpg');
    var unicorn = new catalogItem('unicorn', 'Unicorn', './imgs/newunicorn.jpg');
    var usb = new catalogItem('usb', 'USB', './imgs/newusb.gif');
    var watercan = new catalogItem('watercan', 'Water Can', './imgs/newwater-can.jpg');
    var wineglass = new catalogItem('wineglass', 'Wine Glass', './imgs/newwine-glass.jpg');
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
        return (this.lastGroup.indexOf(this.randoNo) === -1);
    },
    checkNowGroup: function () {
        return (this.nowGroup.indexOf(this.randoNo) === -1);
    },
    fillRandomIndicies: function () {
        while (this.nowGroup.length < 3) {
            this.getRandomIndicies();
            if ((this.nowGroup.length === 0) && (this.checkLastGroup() === true)) {
                this.nowGroup.push(this.randoNo);
                this.randoNo = 0;
            } else if ((this.checkLastGroup() === true) && (this.checkNowGroup() === true)) {
                this.nowGroup.push(this.randoNo);
                this.randoNo = 0;
            }
        }
    },
    populateOptions: function () {
        for (var i = 0; i < this.nowGroup.length; i++) {
            var imageLoc = document.getElementsByClassName('optionImage')[i];  /*grabs an image tag with the class */
            var wordLoc = document.getElementsByClassName('optionName')[i];  /*grabs a fig caption tag by class */
            var imgSrc = busMallItems[this.nowGroup[i]].itemFilepath; /* grabs an image filepath referenced by index */
            var nameLoc = busMallItems[this.nowGroup[i]].itemName; /* grabs an item name referenced by index */
            var imgId = busMallItems[this.nowGroup[i]].itemId;
            imageLoc.id = imgId;
            imageLoc.src = imgSrc; /*appends an image filepath to the image src */
            wordLoc.textContent = nameLoc; /* adds the image name to the fig caption */
            var optionIndex = this.nowGroup[i];
            busMallItems[optionIndex].noTimesShown = busMallItems[optionIndex].noTimesShown + 1; /* adds one to the times shown property of the item manipulated by this loop */
        }
        this.trackThisGroup();
        this.resetThisGroup();
    },
    trackVotes: function () {
        var gotClicked = event.target.id;
        this.lastGroup.forEach(function (element, index) {
            if (busMallItems[doAllTheWork.lastGroup[index]].itemId === gotClicked) {
                busMallItems[doAllTheWork.lastGroup[index]].noTimesClicked = busMallItems[doAllTheWork.lastGroup[index]].noTimesClicked + 1;
            }
        });
    }
};

var selectOption = document.getElementById('eventSite');
selectOption.addEventListener('click', voteHandler);
var votes = 0;

function voteHandler() {
    event.preventDefault();
    if (votes > 24) {
        var totalChartLoc = document.getElementById('totalChartLoc');
        totalChartLoc.innerHTML = '<canvas id="totalChart" width="350" height="200"></canvas><form action="#" id="resetAggregateButton">                </form>';
        var optionNames = [];
        var userClickedArray = [];
        var totalClickedArray = [];
        var context2 = document.getElementById('totalChart');
        selectOption.innerHTML = '<canvas id=instanceChart width="250" height="200"></canvas><form action="#" id="resetInstanceButton"></form>';
        var context1 = document.getElementById('instanceChart');
        var addResetAggregateButton = document.getElementById('resetAggregateButton');
        addResetAggregateButton.innerHTML = '<input type="submit" name="reset" value="Reset" id="resetAggregate" />';
        var resetAggregate = document.getElementById('resetAggregate');
        resetAggregate.addEventListener('click', resetAggregateHandler);
        var addResetInstanceButton = document.getElementById('resetInstanceButton');
        addResetInstanceButton.innerHTML = '<input type="submit" name="reset" value="Reset" id="resetInstance" />';
        var resetInstance = document.getElementById('resetInstance');
        resetInstance.addEventListener('click', resetInstanceHandler);
        if (clicks.length) {
            console.log("clicks has data" + clicks);
            for (var i = 0; i < busMallItems.length; i++) {
                optionNames.push(busMallItems[i].itemName);
                userClickedArray.push(busMallItems[i].noTimesClicked);
                console.log(userClickedArray);
	            totalClickedArray.push(busMallItems[i].noTimesClicked + clicks[i]);
                console.log(totalClickedArray);
            }
        } else {
            console.log("clicks is emtpy" + clicks);
            for (var j = 0; j < busMallItems.length; j++) {
                optionNames.push(busMallItems[j].itemName);
                userClickedArray.push(busMallItems[j].noTimesClicked);
                console.log('userClickedArray is ' + userClickedArray);
                totalClickedArray.push(busMallItems[j].noTimesClicked);
                console.log('totalClickedArray is ' + totalClickedArray);
            }
        }
        var focusUserChart = new Chart(context1, {
            type: 'bar',
            data: {
                labels: optionNames,
                datasets: [{
                    label: '# of times clicked this instance',
                    data: userClickedArray,
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
                            beginAtZero: true,
                            stepSize: 1
                        },
                    }]
                }
            }
        });
        var busMallChart = new Chart(context2, {
            type: 'bar',
            data: {
                labels: optionNames,
                datasets: [{
                    label: '# of times clicked in total',
                    data: totalClickedArray,
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
                            beginAtZero: true,
                            stepSize: 1
                        },
                    }]
                }
            }
        });
        localStorage.setItem('storedClicks', JSON.stringify(totalClickedArray));
        return;
    }
    if (event.target.src || event.target.class) {
        doAllTheWork.trackVotes();
        doAllTheWork.fillRandomIndicies();
        doAllTheWork.populateOptions();
        votes = votes + 1;
    }
}

function resetAggregateHandler() {
    event.preventDefault();
    localStorage.clear();
}
function resetInstanceHandler() {
    event.preventDefault();
    votes = 0;
    for (var i = 0; i < busMallItems.length; i++){
        busMallItems[i].noTimesClicked = 0;
    }
    selectOption.innerHTML = '<figure><img src="" alt="" class="optionImage" id="" /><br /><figcaption class="optionName"></figcaption></figure><figure><img src="" alt="Click here to start." class="optionImage" id="" /><br /><figcaption class="optionName"></figcaption></figure><figure><img src="" alt="" class="optionImage" id="" /><br /><figcaption class="optionName"></figcaption></figure>';
    clicks = JSON.parse(localStorage.getItem('storedClicks'));
}

instantiateOptions();
