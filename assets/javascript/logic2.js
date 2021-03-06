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
var buttonMaker = function() {
    for (var i = 0; i < topics.length; i++) {
        var b = $('<button>');
        b.addClass('btn-style');
        b.addClass('button');

        // if user puts in two word search
        var plusTitles = topics[i].split(' ').join('+');
        b.attr('data-type', plusTitles).append(topics[i]);

        b.text(topics[i]);

        // push the buttons to the div
        $("#buttonDiv").append(b);
}
}


// Button on-click function
$('.button').on('click', function() {

    // Identifies what is being selected
    var topic = $(this).data('type');
    console.log(topic);

    // adds the topic to the queryURL
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);

//ajax call to the API
    $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            console.log(response);

            // emptys out last gifs generated
            $("#gifsAppearHere").empty();

            // loop for ten gifs
            for(i=0; i <numGif; i++) {
              console.log(response.data[i].images.original_still.url);
              var results = response.data[i].images.original_still.url

              console.log(response.data[i].rating);
              var rating = response.data[i].rating;

              //       start dumping into the HTML
              var gifWell = $("<div>");

              // var gifImage = $("<img>")
              // gifImage.attr("src", response.data[i].images);
              // gitImage.attr("data-still", response.data[i].images.)

              // for the rating
              var p = $("<p>");

              gifWell.addClass("well");
              gifWell.attr("id", "gifWell-" + i);
              $("#gifsAppearHere").append(gifWell);

              // add in the gif, followed by the rating
              $("#gifWell-" + i).append("<p>" + "Rating: " + rating);
              $("#gifWell-" + i).append("<img src=" + response.data[i].images.original_still.url + ">");
            }
      })
})



    // path to the gif: data.images.fixed_height;

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

          // push the new buttons to the div
          b.addClass('letter');
          b.attr('data-type', topics[i]);
          b.text(topics[i]);
          $("#buttonDiv").append(b);

      return false;
    });

//run buttonMaker
buttonMaker();

//PSUEDOCODE

// 1. Turn array of topics into buttons
// 2. Add function to the buttons
// 3. Take user input and turn into a variable


// each button will have a data-type
// array name is the data-type
// on click - pull data type and that data type will be inserted into the query url base
// the api will limit the number of gifs pulled, no for loop needed
//
