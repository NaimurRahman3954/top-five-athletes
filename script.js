const buttons = document.querySelectorAll(".button");

buttons.forEach((item) => {
   item.addEventListener("click", ()=>{
      // disable button on click
      item.disabled = true;
   })            
})

const players = [];

function display(players){
   const listItems = document.getElementById('list');
   listItems.innerHTML = '';
   for (let i = 0; i < players.length; i++) {
      if (i<5){
         
         const element = players[i];
         const listItem = document.createElement('li');
         listItem.innerHTML = `${element}`;
         listItems.appendChild(listItem);
      }
      else{
         alert("You cannot add more than 5 players");
         players.pop();
         return;
      }
   }
}

function addToList(element){
   // Selecting player name from cards
   const playerName = element.parentNode.children[1].innerText;

   // adding player name to players array
   players.push(playerName);

   // calling display function to display players' names as a list
   display(players);

   // calculating numbers of players selected
   document.getElementById('no.-of-players').innerText = players.length;
}

// calculating players' cost
const playerAmountBtn = document.getElementById("addPlayerAmount");
playerAmountBtn.addEventListener("click", function(){
   const playerAmount = document.getElementById("paidAmount").value; 
   const playerExpense = parseFloat(playerAmount)*players.length;

   document.getElementById("player-expense").innerText = playerExpense;

   // clearing the input fields
   document.getElementById("paidAmount").value = "";
})

// calculating managerial cost
const managerialAmountBtn = document.getElementById("addManagerialAmount");
managerialAmountBtn.addEventListener("click", function(){
   const managerAmount = document.getElementById("managerPaidAmount").value; 
   const coachAmount = document.getElementById("coachPaidAmount").value; 
   const managerialExpense = parseFloat(managerAmount)+ parseFloat(coachAmount);

   const playerExpense = parseFloat(document.getElementById("player-expense").innerText);
   document.getElementById("managerial-expense").innerText = playerExpense + managerialExpense;

   // clearing the input fields
   document.getElementById("managerPaidAmount").value = "";
   document.getElementById("coachPaidAmount").value = "";
})


// NaN handling
function validate(evt) {
   var theEvent = evt || window.event;
 
   // Handle paste
   if (theEvent.type === 'paste') {
       key = event.clipboardData.getData('text/plain');
   } else {
   // Handle key press
       var key = theEvent.keyCode || theEvent.which;
       key = String.fromCharCode(key);
   }
   var regex = /[0-9]|\./;
   if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
   }
 }