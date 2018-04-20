

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