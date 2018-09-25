var topics = ["Dog", "Cat", "Horse"];

$("button").on("click", function() {
})

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key6c4JhykYadmEOL8spw1wMdsMcNrqPX1r";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

    for (var i = 0; i < results.length; i++) {
        
    }