/* listener.js
 * 		Handles all key listener events.
*/

function updateDown(keyCode, x){
	console.log("Key Pressed: " + keyCode);

	switch (keyCode){
	//WASD movement
		case 38:
		case 87: //w
			moveUp = x;
			break;
		case 37:
		case 65: //a
			moveLeft = x;
			break;
		case 40:
		case 83: //s
			moveDown = x;
			break;
		case 39:
		case 68: //d
			moveRight = x;
			break;
			
		//Teleporting
		case 84:
			if (state !== 0){
				//enter teleport menu
				state = 0;
			}
			else{ //exit teleport menu
				state = 1;
			}
			break;
		case 48:
			if (state === 0){
				goToWorld(0);
				state = 1;
			}
			break;
		case 49:
			if (state === 0){
				goToWorld(1);
				state = 1;
			}
			break;
		case 50:
			if (state === 0){
				goToWorld(2);
				state = 1;
			}
			break;
		default:
			break;
	}
}

function updateUp(keyCode, x){
	console.log("Key Released: " + keyCode);

	switch (keyCode){
	//WASD movement
		case 38:
		case 87: //w
			moveUp = x;
			break;
		case 37:
		case 65: //a
			moveLeft = x;
			break;
		case 40:
		case 83: //s
			moveDown = x;
			break;
		case 39:
		case 68: //d
			moveRight = x;
			break;
		default:
			break;
	}
}

function onKeyDown(evt){
	updateDown(evt.keyCode, true);
}

function onKeyUp(evt){
	updateUp(evt.keyCode, false);
}

window.addEventListener('keydown',onKeyDown,true);
window.addEventListener('keyup',onKeyUp,false);