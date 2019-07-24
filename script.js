const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");var li = document.querySelectorAll("li");


function getCurrentList(){
  const list = document.querySelectorAll("li");
  return list;
}

function inputLength() {
  return input.value.length;
}

function createListElement(){
  const li = document.createElement("li");
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

function toggleLineThrough(event) {
  const li = event.target.closest('li');
  li.classList.toggle("done");
}

function createDeleteButton(index){
  const list = getCurrentList();
  const button=document.createElement("button");
  button.appendChild(document.createTextNode("Delete Me"));
  list[index].appendChild(button);
  button.onclick=removeListItem;
}

function removeListItem(event){
  event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)
ul.addEventListener("click", toggleLineThrough)

getCurrentList().forEach(function(element, index){
  createDeleteButton(index);
})




