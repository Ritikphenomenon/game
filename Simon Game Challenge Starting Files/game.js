var buttoncolours=["red","blue","green","yellow"];
 
var gamepattern=[];

var userclickedpattern=[];


var started=false;

var level=0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextsequence();
        started=true;
    }
});


$(".btn").click(function(){
    var userchoosencolour=$(this).attr("id");

    userclickedpattern.push(userchoosencolour);

    playsound(userchoosencolour);

    animatepress(userchoosencolour);
});

function nextsequence(){


    level++;

    $("#level-title").text("Level "+level);

    
    var randomnumber=Math.floor(Math.random()*4);
    var randomchoosencolour=buttoncolours[randomnumber];

    
     
    $('#'+randomchoosencolour).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomchoosencolour);

  

}

function playsound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}


function animatepress(currentcolor){
    $("#"+currentcolor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentcolor).removeClass("pressed");
    },100);
}


