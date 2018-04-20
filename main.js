var controller = {
    init: function () {

        //------------------------------------------------------------------ EVENTHANDLER ---------------------------------------------------------------//
        document.getElementById('exit').addEventListener('click', clickAd, false);

        controller.c = document.getElementById("ad");
        controller.i = 0;
        controller.ia = [];

        controller.ia.push('images/bg.jpg');
        controller.ia.push('images/cta.png');
        controller.ia.push('images/cta_glow.png');
        controller.ia.push('images/logo.png');
        controller.ia.push('images/copyright.png');
        controller.ia.push('images/copy.png');
        controller.ia.push('images/kylo.png');

        controller.loadImages();
    },
    startAd: function () {
        document.getElementById('ad').className = "start";
        var a = controller.c.getElementsByTagName('div');
        for (var i = 0; i < a.length; i++) {
            a[i].style.mozAnimationPlayState = "running";
            a[i].style.webkitAnimationPlayState = "running";
            a[i].style.animationPlayState = "running";
        }
        a = controller.c.getElementsByTagName('img');
        for (var i = 0; i < a.length; i++) {
            a[i].src = a[i].getAttribute('data-src');
        }
        window.addEventListener('resize', resize, false);
        resize();
        window.addEventListener('resize', resizeContent, false);
        resizeContent();

        controller.c.style.display = "block";
    },
    loadImages: function () {
        for (var i = 0; i < controller.ia.length; i++) {
            var im = new Image();
            im.onload = controller.imageLoaded;
            im.src = controller.ia[i];
        }
    },
    imageLoaded: function () {
        controller.i++;
        if (controller.i == controller.ia.length) {
            controller.startAd();
        }
    }
};

//-------------------------------------------------------------------- FUNCTIONS ---------------------------------------------------------------//

function clickAd() {
    switch (this.id) {
        case "exit":
            if(getUriParams.clickTag){
                if(getUriParams.target){
                    window.open(getUriParams.clickTag, getUriParams.target);
                } else {
                    window.open(getUriParams.clickTag, "_blank");
                }
            }
            break;
    }
}


function resize() {
    var a = document.getElementsByClassName('resize');
    var r = 1;
    if(window.innerHeight < 800) {
        r = window.innerHeight / 800;
    }
    for (var i = 0; i < a.length; i++) {
        a[i].style.transform = 'scale(' + r + ')';
    }
}

function resizeContent() {
    var a = document.getElementsByClassName('resizeContent');
    var r = 1;
    if(window.innerWidth < 976) {
        r = window.innerWidth / 976;
    }
    for (var i = 0; i < a.length; i++) {
        a[i].style.transform = 'scale(' + r + ')';
    }

}


var getUriParams = function() {
    var query_string = {};
    var query = window.location.search.substring(1);
    var parmsArray = query.split('&');
    if(parmsArray.length <= 0) return query_string;
    for(var i = 0; i < parmsArray.length; i++) {
        var pair = parmsArray[i].split('=');
        var val = decodeURIComponent(pair[1]);
        if (val != '' && pair[0] != '') query_string[pair[0]] = val;
    }
    return query_string;
}();

controller.init();