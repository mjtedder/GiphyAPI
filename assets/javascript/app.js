//todo: add comments to JS

//Let's pseudocode what we want to do first


//STEP ONE: Let's make an array of strings for our topic (reactions)
//Save it to a variable called "topicGifs"
lastClick = [];
//Put the inital array of buttons and the function to append buttons in an object
var topicGifs = {
  //Initial array of buttons
  topicSearches: ["Jack Black", "Puppies", "Fail", "Oranges", "Cows", "Pizza", "Trending", "GTAV"], //$(this).attr("data-person");
  //Loop through each item in array and append a button to HTML
  buttonLoop: function() {
    for (var b = 0; b < topicGifs.topicSearches.length - 1; b++) {
      var buttonM = $("<button class='dynGen'>").text(topicGifs.topicSearches[b]).attr("data-index", topicGifs.topicSearches[b]);
      $("#buttons-view").append(buttonM);
    }
  },
  //STEP TWO:  Let's link to the GIPHY API using our API Key 8tmAcoLVzH4CA0kQdDen7FlFpI7n9Eu6
  divLoop: function(click) {
    //Linking GIPHY API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + lastClick + "&api_key=8tmAcoLVzH4CA0kQdDen7FlFpI7n9Eu6&limit=10";
    //STEP THREE: Let's make an AJAX call using jQuery to grab 10 static images for each button
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      //STEP FOUR: Let's console.log the AJAX call response to ensure everything is linked properly
      console.log(response.data);
      //Looping through AJAX call responses and setting variables for everything we want to display from GIPHY API
      for (var i = 0; i < response.data.length; i++) {
        var respData = response.data[i];
        var image = respData.images.fixed_height_still.url;
        var gif = respData.images.fixed_height.url;
        var rating = respData.rating;
        var dynDiv = $("<div class='dyn-div'>");
        //dynDiv.attr("data-index", i);
        //This variable is set to display the still GIF first
        var topicImg = $("<img class='still-image'>");
        //Setting attributes to the image that will be displayed.
        topicImg.attr("src", image);
        topicImg.attr("alt", "Topic still frame of gif");
        topicImg.attr("data-gif", gif);
        topicImg.attr("class", "topicImg");
        topicImg.attr("data-index", i);
        topicImg.attr("data-img", image);
        //Appending gifs to HTML
        dynDiv.append(topicImg);
        //Appending rating below gifs
        dynDiv.append("<p> Rating: " + rating + "</p>");

        $("#gifs-appear-here").prepend($(dynDiv));
      };

    });

  },
  //When the user clicks add topic, a button is created in the array
  userClick: function() {
    var userInput = $("input[type='text']").val().trim();
    topicGifs.topicSearches.push(userInput);
    var buttonU = $("<button class='dynGen'>").text(userInput).attr("data-index", userInput);
    $("#buttons-view").append(buttonU);
    console.log(topicGifs.topicSearches);
  }
};
//Executing function to update buttons
topicGifs.buttonLoop();
//Adding new button from form input when "submit" button is clicked
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  topicGifs.userClick();
  //Emptying text in form
  $("#gif-input").val("");
});

//Displays 10 gifs when a button in the array is clicked
$(document).on("click", "button.dynGen", function(event) {
  var currentIndex = $(this).attr("data-index");
  lastClick.push(currentIndex);
  console.log(currentIndex);
  event.preventDefault();
  $("#gifs-appear-here").empty();
  topicGifs.divLoop();
  lastClick = [];
});

//Clicking GIF alternates between still and animated
$(document).on("click", ".topicImg", function(event) {
  console.log("test");
  //topicGifs.animateGif();
  var currentIn = $(this).attr("data-index");
  var tempUrl = $(this).attr("data-gif");
  var tempUrl2 = $(this).attr("data-img");
  console.log(currentIn);
  console.log(tempUrl);
  if ($(this).attr("src") == tempUrl2) {
    $(this).attr("src", tempUrl);
  } else if ($(this).attr("src") == tempUrl) {
    $(this).attr("src", tempUrl2);
  };
});

//Don't forget to reference Activites in Module 6 from class and the GIPHY API DOCS!!!
