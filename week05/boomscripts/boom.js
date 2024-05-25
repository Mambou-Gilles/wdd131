/* Variable to hold references */
const input = document.querySelector('#favchap');
const button = document.querySelector("button");
const list = document.querySelector("#list");

const chaptersArray = getChapterList() || [];



/*Create a click event listener for the Add Chapter button using an addEventListener.*/
button.addEventListener('click', function(){
    if (input.value.trim() != ""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterLink();
        input.value = '';
        input.focus();
    }
    
});

chaptersArray.forEach(chapter =>{
        displayList(chapter);
})

function displayList(input){
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
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
        
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
};  

function setChapterList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chapterArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chapter
}

