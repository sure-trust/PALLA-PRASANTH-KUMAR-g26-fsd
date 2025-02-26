function addNewTodo() {
     document.getElementById("add").addEventListener("click", () => {
         let inputField = document.getElementById("IE");
         let list = document.getElementById("item");
         list.innerHTML += `<li id="${list.childElementCount + 1}-count">${inputField.value} <button onclick="deleteTask(this)">Delete</button></li>`;
         inputField.value = "";
     });
}

function deleteTask(button){
     button.parentElement.remove()
}
addNewTodo();