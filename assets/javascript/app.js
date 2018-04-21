//Let's pseudocode what we want to do first


//STEP ONE: Let's make an array of strings for our topic (reactions)
//Save it to a variable called "topics"
lastClick = [];

var topicGifs = {

    topicSearches: ["jack black", "puppies", "fail", "oranges", "cows", "pizza", "trending", "gtav"], //$(this).attr("data-person");

    buttonLoop: function() {
      for (var b = 0; b < topicGifs.topicSearches.length - 1; b++) {
        var buttonM = $("<button class='dynGen'>").text(topicGifs.topicSearches[b]).attr("data-index", topicGifs.topicSearches[b]);
        $("#buttons-view").append(buttonM);
      }
    },
    //STEP TWO:  Let's link to the GIPHY API using our API Key 8tmAcoLVzH4CA0kQdDen7FlFpI7n9Eu6
    divLoop: function(click) {

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + lastClick + "&api_key=8tmAcoLVzH4CA0kQdDen7FlFpI7n9Eu6&limit=10";


        //STEP TWO POINT FIVE: Let's render buttons for our initial array of topics


        //STEP THREE: Let's make an AJAX call using jQuery to grab 10 static images for each button
        $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {

              //STEP FOUR: Let's console.log topics to ensure everything is linked properly
              console.log(response.data);

              for (var i = 0; i < response.data.length; i++) {
                var respData = response.data[i];
                var image = respData.images.fixed_height_still.url;
                var gif = respData.images.fixed_height.url;
                var rating = respData.rating;
                var dynDiv = $("<div class='dyn-div'>");
                //dynDiv.attr("data-index", i);

                var topicImg = $("<img class='still-image'>");

                topicImg.attr("src", image);
                topicImg.attr("alt", "Topic still frame of gif");
                topicImg.attr("data-gif", gif);
                topicImg.attr("class", "topicImg");
                topicImg.attr("data-index", i);
                topicImg.attr("data-img", image);

                dynDiv.append("<p> Rating: " + rating + "</p>");
                dynDiv.append(topicImg);

                $("#gifs-appear-here").prepend($(dynDiv));
              };

            });

          },

          userClick: function () {
            var userInput = $("input[type='text']").val().trim();
            topicGifs.topicSearches.push(userInput);
            var buttonU = $("<button class='dynGen'>").text(userInput).attr("data-index", userInput);
            $("#buttons-view").append(buttonU);
            console.log(topicGifs.topicSearches);
          }
        };

        topicGifs.buttonLoop();

        $("#topic-add-submit").on("click", function(event) {
          event.preventDefault();
          topicGifs.userClick();
        });

        $(document).on("click", "button.dynGen", function(event) {
          var currentIndex = $(this).attr("data-index");
          lastClick.push(currentIndex);
          console.log(currentIndex);
          event.preventDefault();
          $("#gifs-appear-here").empty();
          topicGifs.divLoop();
          lastClick = [];
        });

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
          }
          else if ($(this).attr("src") == tempUrl) {
            $(this).attr("src", tempUrl2);
          };
        });

              //STEP FIVE: Let's get functionality for when our buttons are pressed to display images
              //Use a loop that appends a button for each string in the array


              //STEP SIX: Let's add functionality to pause/play our gifs when clicked

              //STEP SEVEN: Let's display the rating under the GIFs

              //STEP EIGHT: Let's create a form where the user can type a button they want to add

              //STEP NINE: Let's use jQuery to create a new button when the submit button is clicked

              //Don't forget to reference Activites in Module 6 from class and the GIPHY API DOCS!!!
