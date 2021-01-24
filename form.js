class Form{

constructor(){

}
display(){
var title = createElement("h2");
tittle.html("multiplayer_car_racing_game")
title.position(130,0)
var input = createInput("name")
input.position(140,160);
var button = createButton("play")
button.position(250,300);
var greeting = createElement("h3");
buttton.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playerCount = playerCount+1;
    player.update(name);
    player.updateCount(playerCount);
    greeting.html("hello" + name + "waiting_for_others_players_to_join")
    greeting.position(130,160)
})

}
}