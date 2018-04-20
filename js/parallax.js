if (typeof window.orientation == 'undefined') {



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

    var greyDiv = document.getElementById("brownMountain");
    var greyX = 0;
    var greyY = 0;
    var greyFactor = 0.005;
    var greyArray = new Array();
    greyArray.push(greyDiv, greyX, greyY, greyFactor);
    objectArray.push(greyArray);

    var ballDiv = document.getElementById("yellowMountain");
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


        /*if($global11==1)
        {
            var yourDivPositionX = objectArray[i][3]/4 * (0.2 * 2000 - tempX) + $global3;
            var yourDivPositionX2 = objectArray2[i][3]/4 * (0.2 * 2000 - tempX) + $global4;
            var yourDivPositionX3 = objectArray3[i][3]/4 * (0.5 * 800- tempX) + $global5;
        }*/
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
        if($global11==2) {

            var yourDivPositionY = 0.01 * (0.5 * 1200 - tempY);
            //$("p:last").text(objectArray[i][3]);
            objectArray[i][0].style.top = yourDivPositionY + 'px';
            objectArray2[i][0].style.top = yourDivPositionY * 2 + 'px';
            objectArray3[i][0].style.top = yourDivPositionY * 4 + 'px';
            $("#brownMountain").stop();
            $("#yellowMountain").stop();
            $("#field").stop();
        }

    }
}



}


