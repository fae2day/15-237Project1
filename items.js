/* items.js
 * 		Contains item-related functions.
*/

function action(){
  if(arguments.length===0)
    pickUp(arguments[0]);
  else
    drop(arguments[0],arguments[1]);

}

function pickUp(id){
  idpick.x=inventory.x; // inventory is a variable
  idpick.y=inventory.y;
  dialogue("You picked up "+id);
}

function drop(idpick,iddrop){
  iddrop.x=idpick.x;
  iddrop.y=idpick.y;
  idpick.x=inventory.x;
  idpick.y=inventory.y;
  
  dialogue("You dropped "+idpick.name+" and picked up "+iddrop.name);
}

function dialogue(){
  
}
