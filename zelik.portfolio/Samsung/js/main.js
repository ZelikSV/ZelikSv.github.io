// preloader

document.getElementById('videoFile').onload = function () {
    setTimeout(function () {
        var spamBanner = document.getElementById('spam-banner');
        if (!spamBanner.classList.contains("done")) {
            spamBanner.classList.add("done");
        }
    }, 1000);
};

var scroll = document.getElementById('range'),
    card = document.getElementById('card'),
    flashCard = document.getElementById('flash-card'),
    flash = document.getElementById('flash'),
    video = document.getElementById('video'),
    sidepiece = document.getElementById('sidepiece'),
    first = document.getElementById('first-text'),
    second = document.getElementById('second-text'),
    third = document.getElementById('third-text'),
    forth = document.getElementById('forth-text'),
    rain = document.getElementById('rain'),
    youTube = document.getElementById('videoFile'),
    slide = document.getElementById('slide'),
    close = document.getElementById('close'),
    raining = false;

function addDrop() {
    var mainClass = 'drop',
        styleDrop = 'drop-' + randomNumber(1, 4),
        doneClass = 'show',
        downClass = 'down-' + randomNumber(1, 5),
        dropSize = 'drop-size-' + randomNumber(1, 5),
        newDrop = document.createElement('div'),
        hideDrops = 'hideDrops'+ randomNumber(1, 2),
        leftPos = randomNumber(0, 90),
        topPos = randomNumber(0, 60);

    rain.appendChild(newDrop);

    newDrop.className = mainClass;

    setTimeout(function () {
        newDrop.classList.add(styleDrop, doneClass);
    }, 100);
    setTimeout(function () {
        newDrop.classList.add(dropSize);
    }, 200);
    setTimeout(function () {
        newDrop.classList.add(downClass);
    }, 600);
    setTimeout(function () {
        newDrop.classList.add(hideDrops);
    }, 6000);

    newDrop.style.left = leftPos + '%';
    newDrop.style.top = topPos + '%';
}

function randomNumber(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

function startRaining() {
    if (raining) {
        return
    } else {
        rainTimer = setInterval(addDrop, 200);
        raining = true;
        setTimeout(stopRaining, 29000);
    }
};

function stopRaining() {
    if (!raining) {
        return
    } else {
        clearInterval(rainTimer);
        delClass(rain);
        setTimeout(function () {
            delDrops(rain);
        }, 500);
        raining = false;
    }
};

function delDrops(parent) {
    var del = parent.querySelectorAll('div');
    for (let i = 0, item; item = del[i]; i++) {
        parent.removeChild(item);
    }
};

function delClass(parent) {
    var del = parent.querySelectorAll('div');
    for (let i = 0, item; item = del[i]; i++) {
        item.classList.remove('show');
    }
};
// rotate phone and other efects
scroll.oninput = function () {
    slide.style.backgroundPositionY = -(scroll.value * 221) + 'px';
    if (scroll.value >= 1) {
        video.style.display = 'none';
        sidepiece.style.display = 'none';
        youTube.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else {
        video.style.display = 'block';
        sidepiece.style.display = 'block';
        youTube.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    };
    if ((scroll.value >= 27) && (scroll.value <= 30)) {
        flash.style.display = 'block';

    } else {
        flash.style.display = 'none';
    };
    if (scroll.value == 59) {
        card.style.display = 'block';
        flashCard.style.display = 'block';
    } else {
        card.style.display = 'none';
        flashCard.style.display = 'none';
    };
    if (scroll.value == 0) {
        first.style.opacity = '1';
        second.classList.remove('show');
    } else if ((scroll.value > 1) && (scroll.value <= 21)) {
        first.style.opacity = '0';
        first.classList.remove('show');
        second.classList.add('show');
        third.classList.remove('show');
    } else if ((scroll.value > 21) && (scroll.value <= 47)) {
        second.classList.remove('show');
        third.classList.add('show');
        forth.classList.remove('show');
    } else if (scroll.value > 47) {
        third.classList.remove('show');
        forth.classList.add('show');
    };
    if (scroll.value >= 5 && scroll.value <= 23) {
        startRaining();
    } else {
        stopRaining();
    }
};

close.onclick = function (){
    document.getElementById('spam-banner').style.opacity = '0';
    return false;
};
