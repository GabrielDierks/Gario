function animate() {


    if( $global11==1){

        $("#brownMountain").animate({"left": "-=1px"}, {

            duration: 40,
            easing: "linear",
            step: function (now, fx) {
                //$("p:last").text(now);
                $global3 = now;


            }

        });
        $("#yellowMountain").animate({"left": "-=1px"}, {

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