var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll(".delete");

function inputLength() {
	return input.value.length;
}

function deleteListElement(button){
	button.addEventListener("click",function(){
		button.parentElement.remove();
	});
}

function createDeletebutton(parentElement){
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.setAttribute("class","delete");
	parentElement.appendChild(deleteButton);
	deleteListElement(deleteButton);
}

function strikethroughListItem(list_item){
	list_item.addEventListener("click", function(event){
		event.srcElement.classList.toggle("done");
	});
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + "  "));
	li.setAttribute("class","list");
	ul.appendChild(li);
	input.value = "";
	createDeletebutton(li);
	strikethroughListItem(li);
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


deleteButtons.forEach(deleteListElement);
listItems.forEach(strikethroughListItem);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);