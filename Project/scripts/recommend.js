// Listen for changes in the select element
const selectElement = document.getElementById("genre");
selectElement.addEventListener("change", function() {
    // Check if the selected option is "Other"
    if (selectElement.value === "other") {
        // Create an input element
        const inputElement = document.createElement("input");
        const id = document.createElement("id");
        inputElement.id = "recommendation";
        inputElement.type = "text";
        inputElement.value = "Enter recommendation";
        inputElement.name = "otherGenre"; // Assign a name for the input field (optional)

        // Append the input element after the select element
        selectElement.parentNode.insertBefore(inputElement, selectElement.nextSibling);
    } else {
        // Remove any existing input element if the selected option is not "Other"
        const inputElement = selectElement.parentNode.querySelector("#recommendation");
        if (inputElement) {
            inputElement.remove();
        }
    }
});


// document.getElementById("movie-recommendation-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission
//     // Process form data here (e.g., send it to a server for recommendations)
//     // You can access form fields using document.getElementById or event.target
//     var genre = document.getElementById("genre").value;
//     var releaseYear = document.getElementById("release-year").value;
//     var rating = document.getElementById("rating").value;
    
//      // Create a query string
//      const queryString = new URLSearchParams({
//         genre: genre,
//         releaseYear: releaseYear,
//         rating: rating
//     }).toString();

//     fetch(`/recommendations?${queryString}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle the response (e.g., display recommendations to the user)
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
// });

