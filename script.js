// Step 1: Change text dynamically
let title = document.getElementById("main-title");
let description = document.getElementById("description");

document.getElementById("change-text").addEventListener("click", function() {
  title.textContent = "You clicked the Magic Button!";
  description.textContent = "✨ Text has changed! ✨";
});

// Step 2: Modify CSS styles via JavaScript
document.getElementById("change-style").addEventListener("click", function() {
  title.style.color = "purple";
  description.style.fontSize = "24px";
  document.body.style.backgroundColor = "#f0e5ff";
});

// Step 3: Add and Remove an Element
let boxContainer = document.getElementById("box-container");

document.getElementById("add-box").addEventListener("click", function() {
  let newBox = document.createElement("div");
  newBox.style.width = "100px";
  newBox.style.height = "100px";
  newBox.style.backgroundColor = "lightblue";
  newBox.style.marginTop = "10px";
  newBox.setAttribute("class", "box");
  boxContainer.appendChild(newBox);
});

document.getElementById("remove-box").addEventListener("click", function() {
  let box = document.querySelector(".box");
  if (box) {
    boxContainer.removeChild(box);
  }
});
