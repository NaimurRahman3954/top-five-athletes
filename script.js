const buttons = document.querySelectorAll(".button");
var node = document.createElement('li');

buttons.forEach((item) => {
   item.addEventListener("click", ()=>{

      // disable button
      item.disabled = true;

      // add to list
      node.appendChild(document.createTextNode('Scooter'));
      document.querySelector('ol').appendChild(node);
   })            
})