var indexValue = 1;
var switchTime = 3000;

var switcher = setInterval(updateHero, switchTime);

showHero(indexValue);

function btm_slide(e) {
    clearInterval(switcher);
    switcher = setInterval(updateHero, switchTime);
    showHero(indexValue = e);
}

function showHero(e) {
    var i;
    const hero = document.querySelectorAll('.dynamic-hero div');
    const sliders = document.querySelectorAll('.btm-sliders span');
    
    if (e > hero.length) {
        e = 1;
        indexValue = e;
    }
    if (e < 1) {
        e = hero.length;
        indexValue = e;
    }

    for (i = 0; i < hero.length; i++) {
        hero[i].style.display = "none";
    }

    for (i = 0; i < sliders.length; i++) {
        sliders[i].style.background = "#CECECE";
    }

    hero[e - 1].style.display = "block";
    sliders[e - 1].style.background = "#D7B399";
}

function updateHero() {
    btm_slide(indexValue += 1);
}