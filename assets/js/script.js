$(document).ready(function() {


  
    var isCharSelected = false;
    var charName = "";
    var attack = 0;
    var health = 0;
    var enemy = "";
    var enemyHealth = 0;
    
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




    //Character Selection
    $("#luke").on("click", function(){
        
        attack = 27;
        attackInc = 27;
        charName = "Luke Skywalker"    
        isCharSelected = true;
        health = 150;
        charSelection();
        
        $("#luke2").show();
        $("#obi3").show();
        $("#yoda3").show();
        $("#qui3").show();
    
    });
    $("#obi").on("click", function(){
        attack = 25;
        attackInc = 27;
        charName = "Obi-Wan Kenobi"    
        isCharSelected = true;
        health = 170;
        charSelection();
    
        $("#obi2").show();
        $("#luke3").show();
        $("#yoda3").show();
        $("#qui3").show();
    
    });
    $("#yoda").on("click", function(){
        attack = 18;
        attackInc = 18;
        charName = "Yoda"    
        isCharSelected = true;
        health = 230;
        charSelection();
        $("#yoda2").show();
        $("#obi3").show();
        $("#yoda3").show();
        $("#qui3").show();
        
        console.log($(this).text());
        
    });
    $("#qui").on("click", function(){
        attack = 20;
        attackInc = 23;
        charName = "Qui-Gonn Jinn"    
        isCharSelected = true;
        health = 190;
        charSelection();
        $("#qui2").show();
        $("#obi3").show();
        $("#yoda3").show();
        $("#luke3").show();
        
    });
    //Enemy Settings
    $("#luke3").on("click", function(){

        $("#luke3").hide();
        $("#luke4").show();

        enemy = "Luke Skywalker";
        enemyHealth = 150;
        $("#defender").text("Defender is " + enemy);   
      
    });
    $("#obi3").on("click", function(){

        $("#obi3").hide();
        $("#obi4").show();

        enemy = "Obi-Wan Kenobi";
        enemyHealth = 170;
        $("#defender").text("Defender is " + enemy);   
      
    });
    $("#yoda3").on("click", function(){
         
        $("#yoda3").hide();
        $("#yoda4").show();

        enemy = "Yoda";
        enemyHealth = 230;
        $("#defender").text("Defender is " + enemy);   
      
    });
    $("#qui3").on("click", function(){

        $("#qui3").hide();
        $("#qui4").show();

        enemy = "Qui-Gon Jinn";
        enemyHealth = 190;
        $("#defender").text("Defender is " + enemy);   
      
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
        
    }

    $("#attack").on("click", function(){
        enemyHealth -= attack;
        $("#attackText").html ("You attacked for " + attack + " damage to the enemy.");
        attack += attackInc;
        console.log(attack);
        console.log(enemyHealth);
        console.log(charName);
        
        
        $("#counterText").html ("You were counter-attacked for "+ attackInc+ " damage.");
       
        health -= attackInc;
        console.log(health);
       
        if (charName == "Luke Skywalker"){

            $("#lukehealth").text(health);
        }
        else if (charName == "Obi-Wan Kenobi"){
            $("#obihealth").text(health);
            console.log("hi it sme");
        }
        else if (charName == "Yoda"){
            $("#yodahealth").text(health);
        }
        else if (charName == "Qui-Gon Jinn"){
            $("#quihealth").text(health);
        }

        if (enemy == "Luke Skywalker"){
            $("#luke4health").text(enemyHealth);
        }
        else if (enemy == "Obi-Wan Kenobi"){
            $("#obi4health").text(enemyHealth);
        }
        else if (enemy == "Yoda"){
            $("#yoda4health").text(enemyHealth);
        }
        else if (enemy == "Qui-Gon Jinn"){
            $("#qui4health").text(enemyHealth);
        }
        
                
    });
    
    

})