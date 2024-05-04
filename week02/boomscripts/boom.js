/* Variable to hold references */
const input = document.querySelector('#favchap');
const button = document.querySelector("button");
const list = document.querySelector("#list");



/*Create a click event listener for the Add Chapter button using an addEventListener.*/
button.addEventListener('click', function(){
    if (input.value.trim() != ""){
        /* Creating a list element to hold each entries chapter title and associated delete button */
        const li = document.createElement('li');

        /* Creating a delete button */
        const deleteButton = document.createElement("button");

        /*Populat the li element variable's textContent or innerHTML with the input value*/

        li.textContent = input.value

        /* Populating the button textContent with a ❌*/
        deleteButton.textContent = '❌';

        /*Appending the li element variable with the delete button*/
        li.append(deleteButton);

        /*Append the li element variable to the unordered list in your HTML.*/
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
          });
        
        input.value = '';
    } else {
        input.focus();
    };
});

