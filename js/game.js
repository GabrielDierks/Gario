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