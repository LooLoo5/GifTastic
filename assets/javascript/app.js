var topics = ["Dog", "Cat", "Horse"];

$("button").on("click", function() {
  var animal = $(this).attr("data-animal");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=6c4JhykYadmEOL8spw1wMdsMcNrqPX1r";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      for (var i = 0; i < response.data.length; i++) {
      var gif = $("<img>").attr("src",response.data[i].images.original.url);
      $("#gifs-appear-here").append(gif);
    }
    });
  })