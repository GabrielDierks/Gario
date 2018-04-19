$( document ).ready(function() {
    console.log( "ready!" );
    $global= 100;
    $global2= 2000;
    $global6=200;
    $global8=103;
    $global9=1;
    $global10=1;
    $global11=1;

    $( "h1:last" ).text( "LEVEL START!" );
    $('.pause').css( 'cursor', 'pointer' );
    $('.resume').css( 'cursor', 'pointer' );

    setTimeout(function() {
        $( "h1:last" ).text( "" );
        $('.hero').css('visibility','hidden');
        if ($global11==1) {
            $('.pause').css('display','block');
        }
        $('.restart').css('display','block');
        run();
        animate();
    },3000);

});


function run() {
    if ($global6 < 1955 && $global11==1) {
        setTimeout(function () {

            $(".walk1").animate({"opacity": "0"}, 50, 'linear', run);
            $(".walk2").animate({"opacity": "1"}, 50, 'linear', run);
        }, 1);
        $(".walk1").animate({"opacity": "1"}, 50, 'linear', run);
        $(".walk2").animate({"opacity": "0"}, 50, 'linear', run);
    }
    else{
        $('.hero').css('visibility','visible');
    }
}







var IE = document.all?true:false;

//If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE)



// Set-up to use getMouseXY function onMouseMove
document.getElementById("click").onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;

var objectArray = new Array();
var objectArray2 = new Array();
var objectArray3 = new Array();

fillObjectArray();


function fillObjectArray() {

    var greyDiv = document.getElementById("grey");
    var greyX = 0;
    var greyY = 0;
    var greyFactor = 0.005;
    var greyArray = new Array();
    greyArray.push(greyDiv, greyX, greyY, greyFactor);
    objectArray.push(greyArray);

    var ballDiv = document.getElementById("ball");
    var ballX = 0;
    var ballY = 0;
    var ballFactor = 0.005;
    var ballArray = new Array();
    ballArray.push(ballDiv, ballX, ballY, ballFactor);
    objectArray2.push(ballArray);


    var fieldDiv = document.getElementById("field");
    var fieldX = 0;
    var fieldY = 0;
    var fieldFactor = 0.01;
    var fieldArray = new Array();
    fieldArray.push(fieldDiv, fieldX, fieldY, fieldFactor);
    objectArray3.push(fieldArray);

    $global3=0;
    $global4=0;
    $global5=0;
}


// Main function to retrieve mouse x-y pos.s

function getMouseXY(e)
{
    if (IE)
    {
        // grab the x-y pos.s if browser is IE
        tempX = event.clientX + document.body.scrollLeft
        tempY = event.clientY + document.body.scrollTop
    }
    else
    {
        // grab the x-y pos.s if browser is NS
        tempX = e.pageX
        tempY = e.pageY
    }
    // catch possible negative values in NS4
    if (tempX < 0){tempX = 0}
    if (tempY < 0){tempY = 0}

    moveDiv(tempX);
    moveDiv2(tempY);

    return true
}

function moveDiv(tempX)
{
    for (var i=0;i<objectArray.length;i++)
    {


        if($global11==1)
        {
            var yourDivPositionX = objectArray[i][3] * (0.2 * 2000 - tempX) + $global3;
            var yourDivPositionX2 = objectArray2[i][3] * (0.2 * 2000 - tempX) + $global4;
            var yourDivPositionX3 = objectArray3[i][3] * (0.5 * 800- tempX) + $global5;
        }
        if($global11==2)
        {
            var yourDivPositionX = objectArray[i][3] * (0.2 * 2000 - tempX) + $global3;
            var yourDivPositionX2 = objectArray2[i][3] * (0.2 * 2000 - tempX) + $global4;
            var yourDivPositionX3 = objectArray3[i][3]*8 * (0.5 * 1200 - tempX) + $global5;
        }

        //$("p:last").text(yourDivPositionX);
        objectArray[i][0].style.left = yourDivPositionX + 'px';
        objectArray2[i][0].style.left = yourDivPositionX2 + 'px';
        objectArray3[i][0].style.left = yourDivPositionX3 + 'px';



    }
}
function moveDiv2(tempY)
{
    for (var i=0;i<objectArray.length;i++)
    {


        var yourDivPositionY = 0.01 * (0.5 * 1200 - tempY);
        //$("p:last").text(objectArray[i][3]);
        objectArray[i][0].style.top = yourDivPositionY + 'px';
        objectArray2[i][0].style.top = yourDivPositionY*2 + 'px';
        objectArray3[i][0].style.top = yourDivPositionY*4 + 'px';
        $("#grey").stop();
        $("#ball").stop();
        $("#field").stop();


    }
}



function animate() {


   if( $global11==1){

    $("#grey").animate({"left": "-=1px"}, {

        duration: 40,
        easing: "linear",
        step: function (now, fx) {
            //$("p:last").text(now);
            $global3 = now;


        }

    });
    $("#ball").animate({"left": "-=1px"}, {

        duration: 20,
        easing: "linear",
        step: function (now, fx) {
            //$("p:last").text(now);
            $global4 = now;

        }

    });

    $("#field").animate({"left": "-=1px"}, {
        duration: 5,
        easing: "linear",
        step: function (now, fx) {
           // $("p:last").text(now);
            $global5 = now;


        }


    });

    $(".gario").animate({"left": "+=1px"}, {
        duration: 5,
        easing: "linear",
        step: function (now, fx) {
            //$("p:last").text(now);
            $global6 = now;
            if ($global6 > 1955) {


                $('.walk1').css('opacity', '0').clearQueue().stop();
                $('.walk2').css('opacity', '0').clearQueue().stop();
                $('.jump').css('visibility', 'hidden');
                $('.hero').css('visibility', 'visible');
                $('.end').css('visibility', 'visible');
                $("h1:last").text("LEVEL COMPLETE!");
                $(".bg").clearQueue().stop();
                $(".bg3").clearQueue().stop();
                $(".bg4").clearQueue().stop();
                $(".finish").clearQueue().stop();
                $(".gario").clearQueue().stop();


            }



        }

    });


    if ($global9 == 2) {
        $(".gario").animate({"top": "-=3px"}, {
            duration: 1,
            easing: "linear",
            step: function (now) {
                //$("p:first").text($global8);
                $global8 = now;
                $('.walk1').css('opacity', '0');
                $('.walk2').css('opacity', '0');
                $(".walk1").stop();
                $(".walk2").stop();
                $(".gario").css('left','+=0.3px');
                console.log('up');


                if ($global8 < 50)
                {
                    $('.walk1').css('opacity', '0');
                    $('.walk2').css('opacity', '0');
                    $(".walk1").stop();
                    $(".walk2").stop();
                    $(".bg").clearQueue().stop();
                    $(".bg3").clearQueue().stop();
                    $(".bg4").clearQueue().stop();
                    $(".finish").clearQueue().stop();
                    $(".gario").clearQueue().stop();
                    $('.jump').css('visibility', 'visible');
                    $global10=2;


                }






            }

        });



    }


    if ($global10 == 2 ) {
        $global9=1;
        $(".gario").animate({"top": "+=3px"}, {

            duration: 1,
            easing: "linear",
            step: function (wow) {

                $global8 = wow;
                $('.walk1').css('opacity', '0');
                $('.walk2').css('opacity', '0');
                $(".walk1").stop();
                $(".walk2").stop();
                $(".gario").css('left','+=0.3px');
                console.log('down');



                if ($global8 >100)
                {

                    $('.walk1').css('opacity', '0');
                    $('.walk2').css('opacity', '0');
                    $(".walk1").stop();
                    $(".walk2").stop();
                    $(".bg").clearQueue().stop();
                    $(".bg3").clearQueue().stop();
                    $(".bg4").clearQueue().stop();
                    $(".finish").clearQueue().stop();
                    $(".gario").clearQueue().stop();
                    $('.jump').css('visibility', 'hidden');
                    run();
                    $global10=1;
                }

            }


        });


    }

    console.log('animate');
    if ($global6 < 1955 && $global8 < 250){
    setTimeout(function () {
        //$("p:first").text($global3);
        //$("p:first").text($global8);
       //$("p:last").text($global8);
        animate();
    }, 1);
    }

   }

    if (($global6>470 && $global6<505) && $global8==103){
        //$("p:first").text("aua");
        die();
    }

    if (($global6>1470 && $global6<1505) && $global8==103){
        //$("p:first").text("aua");
        die();
    }

    if (($global6>1670 && $global6<1705) && $global8==103){
        //$("p:first").text("aua");
        die();
    }


}
$(".pause").on("click", function () {
    $('.walk1').clearQueue().stop();
    $('.walk2').clearQueue().stop();
    //$('.jump').css('visibility', 'hidden');
    //$('.hero').css('visibility', 'visible');
    $('.end').css('visibility', 'visible');
    $(".bg").clearQueue().stop();
    $(".bg3").clearQueue().stop();
    $(".bg4").clearQueue().stop();
    $(".finish").clearQueue().stop();
    $(".gario").clearQueue().stop();
    $global11=2;
    $('.pause').css('display','none');
    $('.resume').css('display','block');
});

$(".resume").on("click", function () {
    $global11=1;
    $('.hero').css('visibility','hidden');
    $('.pause').css('display','block');
    $('.resume').css('display','none');
    run();
    animate();
});

$("#click").on("click", function () {
    console.log('click');
    if (($global8 == 103 && $global11==1)&& ($global6 > 200 && $global6 < 1955)) {
    $('.walk1').css('opacity', '0');
    $('.walk2').css('opacity', '0');
    $(".walk1").stop();
    $(".walk2").stop();
    $(".bg").clearQueue().stop();
    $(".bg3").clearQueue().stop();
    $(".bg4").clearQueue().stop();
    $(".finish").clearQueue().stop();
    $(".gario").clearQueue().stop();
    $('.jump').css('visibility', 'visible');
    $global9=2;

     }
});

document.onkeydown = function (event) {
    if ((event.keyCode == 32 && $global8 == 103) && ($global6 > 200 && $global6 < 1955) && ($global11==1)) {
        $('.instructions').css('visibility', 'hidden');
        $('.walk1').css('opacity', '0');
        $('.walk2').css('opacity', '0');
        $(".walk1").stop();
        $(".walk2").stop();
        $(".bg").clearQueue().stop();
        $(".bg3").clearQueue().stop();
        $(".bg4").clearQueue().stop();
        $(".finish").clearQueue().stop();
        $(".gario").clearQueue().stop();
        $('.jump').css('visibility', 'visible');
        $global9=2

    }

    if (event.keyCode == 83) {

        $('.walk1').clearQueue().stop();
        $('.walk2').clearQueue().stop();
        //$('.jump').css('visibility', 'hidden');
        //$('.hero').css('visibility', 'visible');
        $('.end').css('visibility', 'visible');
        $(".bg").clearQueue().stop();
        $(".bg3").clearQueue().stop();
        $(".bg4").clearQueue().stop();
        $(".finish").clearQueue().stop();
        $(".gario").clearQueue().stop();
        $global11=2;
        $('.pause').css('display','none');
        $('.resume').css('display','block');
    }

    if (event.keyCode == 65) {
        $global11=1;
        $('.hero').css('visibility','hidden');
        $('.pause').css('display','block');
        $('.resume').css('display','none');
        run();
        animate();


    }

}

function die()

{
    $('.walk1').clearQueue().stop();
    $('.walk2').clearQueue().stop();
    //$('.jump').css('visibility', 'hidden');
    //$('.hero').css('visibility', 'visible');
    $('.end').css('visibility', 'visible');
    $(".bg").clearQueue().stop();
    $(".bg3").clearQueue().stop();
    $(".bg4").clearQueue().stop();
    $(".finish").clearQueue().stop();
    $(".gario").clearQueue().stop();
    $('.pause').css('display','none');
    $('.resume').css('display','none');
    $global11 = 2;

    console.log('die');
    $(".gario").animate({"top": "+=3px"}, {

        duration: 1,
        easing: "linear",
        step: function (wow) {

            //$("p:first").text($global8);
            $global8 = wow;
            $('.walk1').css('opacity', '0');
            $('.walk2').css('opacity', '0');
            $(".walk1").stop();
            $(".walk2").stop();
            $('.jump').css('visibility', 'visible');
            //$(".gario").css('left','+=0.3px');
            console.log('down');




        }


    });



    if ($global8 < 250){
        setTimeout(function () {
            //$("p:first").text($global8);
            // $("p:last").text($global6);
            die();
        }, 1);
    }

    if ($global8 == 250){

        $('.walk1').css('opacity', '0').clearQueue().stop();
        $('.walk2').css('opacity', '0').clearQueue().stop();
        $('.jump').css('visibility', 'hidden');
        $('.hero').css('visibility', 'visible');
        $('.end').css('visibility', 'visible');
        $('.restarthint').css('visibility', 'visible');
        $("h1:last").text("YOU FAILED");
        $(".bg").clearQueue().stop();
        $(".bg3").clearQueue().stop();
        $(".bg4").clearQueue().stop();
        $(".finish").clearQueue().stop();
        $(".gario").clearQueue().stop();
    }


}