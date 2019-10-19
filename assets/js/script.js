$(document).ready(function() {


    var isCharSelected = false;
    var charName = "";
    
    //Hide all the not needed portions, this part definitely has a more elegant way but CTRLC CTRLV works.
    $("#luke2").hide();
    $("#obi2").hide();
    $("#yoda2").hide();
    $("#qui2").hide();
    $("#luke3").hide();
    $("#obi3").hide();
    $("#yoda3").hide();
    $("#qui3").hide();
    $("#luke4").hide();
    $("#obi4").hide();
    $("#yoda4").hide();
    $("#qui4").hide();


    $("#luke").on("click", function(){

    charName = "Luke Skywalker"    
    isCharSelected = true;
    
    charSelection();
    
    $("#luke2").show();
    $("#obi3").show();
    $("#yoda3").show();
    $("#qui3").show();
    
    });
    $("#obi").on("click", function(){

        charName = "Obi-Wan Kenobi"    
        isCharSelected = true;
    
        charSelection();
    
        $("#obi2").show();
        $("#luke3").show();
        $("#yoda3").show();
        $("#qui3").show();
    
    });
    $("#yoda").on("click", function(){

        charName = "Jedi Grandmaster Yoda"    
        isCharSelected = true;
        
        charSelection();
        $("#yoda2").show();
        $("#obi3").show();
        $("#yoda3").show();
        $("#qui3").show();
        
        console.log($(this).text());
        
    });
    $("#qui").on("click", function(){

        charName = "Qui-Gonn Jinn the Grey Jedi"    
        isCharSelected = true;
        
        charSelection();
        $("#qui2").show();
        $("#obi3").show();
        $("#yoda3").show();
        $("#luke3").show();
        
    });

    $("#qui3").on("click", function(){

        $("#qui4").show();
       
      
    });
    console.log(isCharSelected)
    
    function charSelection(){
      
        console.log($(this).text());
        $("#charRow").hide();
        
        if (isCharSelected){
            $("#charSelect").html("Your Character is " + charName);
        }
        
        $("#enemies").text("Enemies Available To Attack ");
        $("#fightSection").text("Fight Section");
       
        $("#defender").text("Defender is ");   
     }
})