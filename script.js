const buttons = document.querySelectorAll(".button");
var node = document.createElement('li');
const players = [];

function addToList(element){
   const playerName = element.parentNode.children[1].innerText;
   // console.log(playerName);

   players.push(playerName);
   // let numberOfPlayers = document.querySelectorAll(".list li").length;
   console.log(players);
   // console.log(numberOfPlayers);
   // document.getElementById('no.-of-players').innerText = numberOfPlayers;
   document.getElementById('no.-of-players').innerText = players.length;
}

buttons.forEach((item) => {
   item.addEventListener("click", ()=>{

      // disable button
      item.disabled = true;

      // add to list
      node.appendChild(document.createTextNode('Scooter'));
      document.querySelector('ol').appendChild(node);
   })            
})