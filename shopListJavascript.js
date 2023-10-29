//  The function that adds the items written to input field into the list
function newItem(){
    var addItem = document.getElementById("addItem").value;

    //  Error message if the field is empty
    if (addItem.length == 0) {
        alert("Field is empty!");
        document.getElementById("addItem").style.borderColor="red";
    } 

    //  Error message if the field has less than 3 characters
    else if (addItem.length <= 2) {
        alert("Item too short!");
        document.getElementById("addItem").style.borderColor="red";
    } 

    //  If everything meets the requirements
    else {
        localStorage.setItem("addItem", document.getElementById("addItem").value);

        //  I noticed that the borders of the input field would stay red after the error message color edit, so this should fix that
        document.getElementById("addItem").style.borderColor="black";

        //  Creates the list element in the list container and adds the item in it
        var itemList = document.getElementById("itemList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(addItem));

        //  Creates the edit button
        var editButton = document.createElement("button");
        editButton.appendChild(document.createTextNode("Bought"));
        //  Calls for the edit function
        editButton.onclick = editItem;
        li.appendChild(editButton);
        //  Creates a class for the button
        editButton.classList.add('editButton');

        //  Creates the delete button
        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        //  Calls for the delete function
        deleteButton.onclick = deleteItem;
        li.appendChild(deleteButton);
        //  Creates a class for the button
        deleteButton.classList.add('deleteButton');

        itemList.appendChild(li);
    }
}

//  Function that edits the look of the item in the list to imply that it has been bought
function editItem() {
    this.parentNode.style.textDecoration = "line-through";
    this.parentNode.style.color = "grey";
}

//  Function that removes the item from the list
function deleteItem() {
    this.parentNode.remove();
}