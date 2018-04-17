//Let's pseudocode what we want to do first

//STEP ONE:  Let's link to the GIPHY API using our API Key 8tmAcoLVzH4CA0kQdDen7FlFpI7n9Eu6

//STEP TWO: Let's console.log it to ensure everything is linked properly

//STEP THREE: Let's make an array of strings for our topic (reactions)
  //Save it to a variable called "topics"
$("button").on("click", function() {
var topics = $(this).attr("data-person");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=8tmAcoLVzH4CA0kQdDen7FlFpI7n9Eu6&limit=10";

//STEP FOUR: Let's get functionality for when our buttons are pressed to display images
  //Use a loop that appends a button for each string in the array

//STEP FIVE: Let's make an AJAX call using jQuery to grab 10 static images for each button
$.ajax({
  url: queryURL,
  method: "GET"
})

  .done(function(response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {

      var gifDiv = $("<div class='item'>");

      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var personImage = $("<img>");

      personImage.attr("src", results[i].images.fixed_height.url);

      gifDiv.append(p);
      gifDiv.append(personImage);

      $("#buttons").prepend(gifDiv);
    }
  });
});
//STEP SIX: Let's add functionality to pause/play our gifs when clicked

//STEP SEVEN: Let's display the rating under the GIFs

//STEP EIGHT: Let's create a form where the user can type a button they want to add

//STEP NINE: Let's use jQuery to create a new button when the submit button is clicked

//Don't forget to reference Activites in Module 6 from class and the GIPHY API DOCS!!!
