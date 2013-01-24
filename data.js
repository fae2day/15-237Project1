/* data.js
 * 		Handles most, if not all, initializations. Contains data on every
 *		item, NPC, world, dialogue, achievement, etc.
*/

/** PSA: PLEASE BE CAREFUL WHEN WRITING CODE. CHECK HERE FIRST, OR THE README 
		TO SEE IF A VARIABLE NAME HAS ALREADY BEEN USED. **/
		
/** Also this file is going huge sorry **/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// menu.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	var startPage = true; // wow i forgot how to code things. what even is
	var instPage = false;
	var creditPage = false;
	var gameMode = false;
	
	var sqx = 210;//this is shitty maybe I'll just hardcode it :|
	var sqw = 180;//unless i figure out an algorithm
	var sqh = 30;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// items.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* None yet. */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NPCs.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* None yet. */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// player.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var player = new Object();
player.x = gameWidth/2 - 25;
player.y = gameHeight/2 - 25;
// 0 : forward, 1 : left, 2 : back, 3 : right
player.dir = 0;
player.img = new Image();
player.img.src = "Images/smiley.png";

var moveUp = false;
var moveDown = false;
var moveLeft = false;
var moveRight = false;
		
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// worlds.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Initialization of Worlds Data
var numWorlds = 3;

var worldMap = new Array(numWorlds);
for (var i = 0; i < numWorlds; i++)
{
	worldMap[i] = new Object;
	worldMap[i].ID = i;
	worldMap[i].img = new Image;
}

worldMap[0].img.src = "Images/Worlds/sky.jpg";
worldMap[1].img.src = "Images/Worlds/forest.jpg";
worldMap[2].img.src = "Images/Worlds/flower.jpg";

// World
// state: 0 denotes player is in menu screen, 1 denotes player is in a world.
var state = 1;
// current_world: denotes the world the player is in.
var current_world = 0;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// game.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var intervalID;
var timerDelay = 50;