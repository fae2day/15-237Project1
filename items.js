/* items.js
 * 		Contains item-related functions.
*/

function itemAction(){
  
  if(arguments[0]==undefined)
		pickup(arguments[0]);
	else{
		switchitem(arguments[0],arguments[1]);
	};
}

function pickUp(item){
  
	item.x=inventory.x;
	item.y=inventory.y;
	itemDialogue=("you have picked up "+item.name+"!");//this could be randomized
  // dialogue should be made into a new js file. some other time.
}

function switchitem(onHand,newItem){
	onHand.x=newItem.x;
	onHand.y=newItem.y;
	newItem.x=inventory.x;
	newItem.y=inventory.y;
  
	itemDialogue=("You dropped "+onHand.name+" and picked up "+newItem.name+"!");
}

function itemDialogue(dialogue){

}
