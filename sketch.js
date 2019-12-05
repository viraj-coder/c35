var canvas,playerCount, database;
var gameState=0,bgImage,form,player,game;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game();
game.getState();
game.start();

  
}

function draw(){
  background("white");
  
 
    
    
  
}



function showError(){
  console.log("Error in writing to the database");
}
