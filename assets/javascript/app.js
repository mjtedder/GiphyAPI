//Let's pseudocode what we want to do first


//STEP ONE: Let's make an array of strings for our topic (reactions)
//Save it to a variable called "topics"
var topics = ["jack black", "puppies", "fail", "oranges", "cows", "pizza", "trending", "gta v"]; //$(this).attr("data-person");

//STEP TWO:  Let's link to the GIPHY API using our API Key 8tmAcoLVzH4CA0kQdDen7FlFpI7n9Eu6
function displayGif(){
var gif = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=8tmAcoLVzH4CA0kQdDen7FlFpI7n9Eu6&limit=10";


//STEP TWO POINT FIVE: Let's render buttons for our initial array of topics


//STEP THREE: Let's make an AJAX call using jQuery to grab 10 static images for each button
$.ajax({
  url: queryURL,
  method: "GET"
}).done(function(response) {

  //STEP FOUR: Let's console.log topics to ensure everything is linked properly
  console.log(response);

  //$("button").on("click", function() {
      var results = response.data;

  //for (var i = 0; i < results.length; i++) {

    //if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
      var gifDiv = $("<div class='item'>");

      var rating = response.rating;

      var p = $("<p>").text("Rating: " + rating);

      var gifImage = $("<img>");

      gifImage.attr("src", response.url);

      gifDiv.append(p);
      gifDiv.append(gifImage);

      $("#gifs-appear-here").prepend(gifDiv);
    });


}



//STEP FIVE: Let's get functionality for when our buttons are pressed to display images
//Use a loop that appends a button for each string in the array
function renderButtons() {
  $("#buttons-view").empty();
  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("topic");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttons-view").append(a);
  }
}


renderButtons();
displayGif();

//STEP SIX: Let's add functionality to pause/play our gifs when clicked

//STEP SEVEN: Let's display the rating under the GIFs

//STEP EIGHT: Let's create a form where the user can type a button they want to add

//STEP NINE: Let's use jQuery to create a new button when the submit button is clicked

//Don't forget to reference Activites in Module 6 from class and the GIPHY API DOCS!!!
