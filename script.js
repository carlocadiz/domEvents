var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");var li = document.querySelectorAll("li");
//var list = document.querySelectorAll("li");


function getCurrentList(){
  const list = document.querySelectorAll("li");
  return list;
}

function inputLength() {
  return input.value.length;
}

function createListElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  createDeleteButton(getCurrentList().length - 1);
  input.value = "";
}

function addListAfterClick(){
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event){
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function createDeleteButton(index){
  let list = getCurrentList();
  let button=document.createElement("button");
  button.appendChild(document.createTextNode("Delete!"));
  list[index].appendChild(button);
  button.onclick=removeParent;
}

function removeParent(event){
  event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)

ul.addEventListener("click", function(e){
  var li = e.target.closest('li');
  li.classList.toggle("done");
})


for( let i=0;i<getCurrentList().length;i++){
  createDeleteButton(i);
}




