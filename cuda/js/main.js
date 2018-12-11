var modalWindow = document.createDocumentFragment();
var div = document.createElement("div");
var headerWindowDiv = document.createElement("div");
var input = document.createElement("input");
var btnSearch = document.createElement("button");
var btnPrev = document.createElement("button");
var btnNext = document.createElement("button");
var btnParent = document.createElement("button");
var btnChild = document.createElement("button");
var stylesContainer = document.createElement("style");
var closeBtn = document.createElement("span");
var inputField;

stylesContainer.innerText = `
.checked { 
  border: 1px solid red;
} 
.search-window { 
  position: fixed;
  top: 20%; 
  left: 70%;
  width: 300px;
  padding: 20px;
  z-index: 99999;
  background: rgba(144, 144, 144, .8);
  border-radius: 5px;
}
.header-modal-window {
  width: 300px;
  background: #383838;
  position: relative;
  top: -20px;
  left: -20px;
  padding: 10px 0;
  text-indent: 25px;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
}
input{
  width: 75%;
  padding: 6px;
  border-radius: 5px 0 0 5px;
  margin-bottom: 25px;
}
button{
  line-height: 24px;
  border-radius: 6px;
  margin-right: 5px;
  padding: 0 10px;
  cursor: pointer;
}
.search-btn{
  line-height: 24px;
  border-radius: 0 6px 6px 0;
  border: none;
  margin-right: 0;
  padding: 0 5px;
}
span{
  position: absolute;
  top: 0px;
  right: 10px;
  cursor: pointer;
  font-size: 30px;
}
span:hover{
  color: red;
}`;

// Add some content in btns and inputs
btnSearch.innerHTML = "Search";
btnPrev.innerHTML = "prev";
btnNext.innerHTML = "next";
btnParent.innerHTML = "parent";
btnChild.innerHTML = "child";
closeBtn.innerHTML = "&times;";
input.setAttribute("placeholder", "Enter your selector...");
div.className = "search-window";
headerWindowDiv.className = "header-modal-window";
btnSearch.className = "search-btn";
headerWindowDiv.innerHTML = "Search Node Elements";

// add window content
div.appendChild(headerWindowDiv);
headerWindowDiv.appendChild(closeBtn);
div.appendChild(input);
div.appendChild(btnSearch);
div.appendChild(btnPrev);
div.appendChild(btnNext);
div.appendChild(btnParent);
div.appendChild(btnChild);

modalWindow.appendChild(div);
var bodys = document.querySelector("body");

bodys.appendChild(modalWindow);
bodys.appendChild(stylesContainer);

// Change position of window
dragElement(div);
disabledAllBtns();

function dragElement(elementMoveing) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (headerWindowDiv) {
    // if present, the header is where you move the DIV from:
    headerWindowDiv.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elementMoveing.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elementMoveing.style.top = elementMoveing.offsetTop - pos2 + "px";
    elementMoveing.style.left = elementMoveing.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function disabledAllBtns() {
  btnPrev.setAttribute("disabled", "disabled");
  btnChild.setAttribute("disabled", "disabled");
  btnParent.setAttribute("disabled", "disabled");
  btnNext.setAttribute("disabled", "disabled");
}
function checkedChild(selector) {
  if (!document.querySelector(selector).firstElementChild) {
    btnChild.setAttribute("disabled", "disabled");
  } else {
    btnChild.removeAttribute("disabled");
  }
  if (!document.querySelector(selector).nextElementSibling) {
    btnNext.setAttribute("disabled", "disabled");
  } else {
    btnNext.removeAttribute("disabled");
  }
  if (!document.querySelector(selector).previousElementSibling) {
    btnPrev.setAttribute("disabled", "disabled");
  } else {
    btnPrev.removeAttribute("disabled");
  }
}

input.addEventListener("input", function() {
  inputField = this.value;
});

btnSearch.addEventListener("click", function() {
  if (document.querySelector(".checked")) {
    document.querySelector(".checked").classList.remove("checked");
    document.querySelector(inputField).classList.add("checked");
    input.value = "";
    checkedChild(".checked");
  } else {
    document.querySelector(inputField).classList.add("checked");
    input.value = "";
    checkedChild(inputField);
  }
});

btnParent.addEventListener("click", function() {
  let checkedElement = document.querySelector(".checked");
  checkedElement.parentNode.classList.add("checked");
  checkedElement.classList.remove("checked");
  checkedChild(".checked");
});

btnNext.addEventListener("click", function() {
  let checkedElement = document.querySelector(".checked");
  checkedElement.nextElementSibling.classList.add("checked");
  checkedElement.classList.remove("checked");
  checkedChild(".checked");
});

btnPrev.addEventListener("click", function() {
  let checkedElement = document.querySelector(".checked");
  checkedElement.previousElementSibling.classList.add("checked");
  checkedElement.classList.remove("checked");
  checkedChild(".checked");
});

btnChild.addEventListener("click", function() {
  let checkedElement = document.querySelector(".checked");
  checkedElement.firstElementChild.classList.add("checked");
  checkedElement.classList.remove("checked");
  checkedChild(".checked");
});

closeBtn.addEventListener("click", function() {
  bodys.removeChild(div);
  bodys.removeChild(stylesContainer);
});
