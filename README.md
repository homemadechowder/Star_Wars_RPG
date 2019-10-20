# Star Wars RPG game




# About 
In this section I will go over my thought process and how I went about creating my website structure.

## index.html
In the index.html, I primarily referred to the picture and demo given. THe assignment did not explicitly state to strictly follow the layout of the game, so I took minor and inconsequential creative freedoms to create some of my items and placements. For instance, I added a margin of 5 around the character selection box simply because I think it looked nicer that way. 

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

### Character Selection




