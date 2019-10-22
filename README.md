# Star Wars RPG game




# About 
In this section I will go over my thought process and how I went about creating my website structure.

## index.html
In the index.html, I primarily referred to the picture and demo given. The assignment did not explicitly state to strictly follow the layout of the game, so I took minor and inconsequential creative freedoms to create some of my items and placements. For instance, I added a margin of 5 around the character selection box simply because I think it looked nicer that way. 

The body of the index was done using a grid system provided by bootstrap. Credits to bootstrap, it gave me a lot more time to work on the scripting portion of the project since I didn't have worry about box positions. I had 4 rows on character sets that is hidden until they are specified to show, I did this to prevent any unwanted "this" maneuvers I may commit later on in the code. This method is quite bruteforced but it works before I learn something more reliable.

## style.css
Since I used bootstrap, style.css was mostly used to add colors, borders, pictures, and fonts. I added a background pulled from the web and the font Oswald from google fonts. I made a div with class called charBox to fit the character name, image, and health. I situated these charBoxes on a row to have them be side by side. When the webpage gets smaller, the charBoxes that wouldn't fit gets pushed down. 

## script.js
I started the script with a document ready function to make sure the page is loaded. 

### Setting up variables and starting conditions
I declared variables:
```javascript
    var isCharSelected = false; //Check if a character is selected
    var charName = ""; //Set the charName to nothing
    var attack = 0; //initialize the attack variable
    var health = 0; //initialize the health variable
    var enemy = ""; //Set the enemy name to nothing
    var enemyHealth = 0; //initialize enemy health
    var enemyCount = 0; //initialize the enemies defeated count
    var enemyAtk = 0; //initialize enemy attack stat
```
Along with the variables I also used jquery to set the character boxes to hide on default, so I can show later in next phases.

### Character Selection and Enemy Settings
I set up each character boxes with these onclick settings using their assigned ID's. If they are clicked, then the attack stat will be set to their attack. The attackInc is used for incrementing the attacks for the attack phase. I was planning on giving certain characters a low base attack stat but is able to scale up faster. The math behind this I can easily change but for now this is what each character's profile looks like. I will hide all the other characters and show the one's not selected in the enemy available row.
```javascript
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
```
From the enemies available row I can choose who to fight. This is the same idea with the character selection except the selected one will hide and the one in the defender section will show.

### Attack Phase
The attack phase is triggered by clicking on the attack button. The code snippet is shown below:
```javascript
 $("#attack").on("click", function(){
        enemyHealth -= attack;
        $("#attackText").html ("You attacked for " + attack + " damage to the enemy.");
        attack += attackInc;
        //console.log(attack);
        //console.log(enemyHealth);
        //console.log(charName);
        
        
        $("#counterText").html ("You were counter-attacked for "+ enemyAtk+ " damage.");
       
        health -= enemyAtk;
        console.log(health);
        $("#flavourText").text("");
        if (charName == "Luke Skywalker"){

            $("#lukehealth").text(health);
        }
```
I increment the attack using the attackInc and I decrement enemyHealth with attack. I set the enemyHealth decrement first because attack hasn't been modified yet. Then I correctly ordered the jquery to display the correct amount of damage supposedly dealt.

### Win Condition
For every enemy defeated I increment enemyCount by 1. Once it reaches 3 (since it starts from 0). The game will end, hiding most elements to show a winning text.

```javascript
if (health < 0){
            if (enemyCount == 3){
                alert ("You're one turn from dying, you did it")
            }
            else{
                alert ("You're gonna need more midichlorians for that");
            }
        }

```
There is a special condition that triggers if you are one turn from dying.



