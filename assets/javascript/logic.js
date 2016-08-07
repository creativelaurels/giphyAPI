//VARIABLES
//===============

var topics = ["comicbooks", "art", "whippets", "pantone", "watercolor", "scalloping", "hiking", "garden"];
var numGif = 10;
var authKey = "&api_key=dc6zaTOxFJmzC&limit=10"
var queryURLBase = "http://api.giphy.com/v1/gifs/search?q=";

//Sconsole.log("Query URL:" + queryURL);

// FUNCTIONS
// ===============

//Create buttons from the topics array
//var buttonMaker = function() {
      for (var i = 0; i < topics.length; i++) {
          var b = $('<button>');
          b.addClass('btn-style');
          b.addClass('button');

          // if more than one word searh
          var plusTitles = topics[i].split(' ').join('+');
          b.attr('data-type', plusTitles).append(topics[i]);

          b.text(topics[i]);

          // push the buttons to the div
          $("#buttonDiv").append(b);
          }


// Button on-click function
$('button').on('click', function() {

    var topic = $(this).data('type');
    console.log(topic);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);

//ajax call to the API
    $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            console.log(response);

            $("#gifsAppearHere").empty();

            for(i=0; i <numGif; i++) {
              console.log(response.data[i].images.fixed_width_still.url);
              console.log(response.data[i].rating);

              var gifStill = response.data[i].images.fixed_width_still.url
              var gifURL = response.data[i].images.fixed_width.url
              var rating = response.data[i].rating;

              //       start dumping into the HTML
              var gifWell = $("<div>");
              var gifImg = $("<img>");

              gifImg.attr("src", response.data[i].images.fixed_width_still.url);
              gifImg.attr("data-still", response.data[i].images.fixed_width_still.url);
              gifImg.attr("data-active", response.data[i].images.fixed_width.url);

              gifWell.addClass("well");
              gifWell.attr("id", "gifWell-" + i);
              gifWell.addClass("well");
              $("#gifsAppearHere").append(gifWell);

              $("#gifWell-" + i).append("<p>" + "Rating: " + rating);
              $("#gifWell-" + i).append("<img src=" + gifStill + ">");
              //$("#gifWell-" + i).append("<img src=" + gifURL + ">");

            }
      })
})

$("img").on("click", function(e) {
      //var gifURL = response.data[i].images.fixed_width.url
      console.log("here");
      //$(img).attr("src", "gifURL");

});

// MAIN PROCESSES
//===============

// Search function
$("#runSearch").on("click", function(){

      // stores the user's search term as a variable and trims any whitespace
      searchTerm = $("#searchTerm").val().trim();
      console.log("Search Term: " + searchTerm);

      //push users term into array
      topics.push(searchTerm);
      console.log(topics);
      //buttonMaker();

        //  push the new buttons to the div
          b.addClass('btn-style');
          b.attr('data-type', topics[i]);
          b.text(topics[i]);
          $("#buttonDiv").append(b);

      return false;
    })

//buttonMaker();
//PSUEDOCODE

// 1. Turn array of topics into buttons
// 2. Add function to the buttons
// 3. Take user input and turn into a variable


// each button will have a data-type
// array name is the data-type
// on click - pull data type and that data type will be inserted into the query url base
// the api will limit the number of gifs pulled, no for loop needed
//
