/* world.js
 * 		Handles teleporting and drawing the world's NPCs and items.
*/

// Brings up the menu to teleport to a different world.
function teleportMenu(){
	ctx.font = '30pt Helvetica';
	ctx.textAlign = "center";
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillText("Teleporting...", 225, 225);
}

function goToWorld(label){
	current_world = label;
	console.log("Went to world " + current_world);
}