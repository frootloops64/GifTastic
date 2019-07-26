$(document).ready(function () {

    var startUrl = "https://api.giphy.com/v1/gifs/search?";
    var apiKey = "api_key=jr4aVK0FtI0qBftQR9M21U0ixSWkXggu&q=";
    var initialUrl = startUrl + apiKey;


    $(".btn-primary").on("click", function () {

        query = $(this).text().toLowerCase();
        queryUrl = initialUrl + query;

        $.ajax({
                url: queryUrl,
                method: 'GET'
            })
            .then(function (response) {

                console.log(response);

                for (i = 0; i < 5; i++) {

                    gifUrl = response.data[i].images.downsized.url;
                    console.log(gifUrl);
                    var animalUrl = $("<img>");
                    animalUrl.attr("src", gifUrl);
                    animalUrl.attr("alt", query + " GIF");

                    $("#gifs-here").append(animalUrl);

                };


            });

        console.log(query);
        console.log(queryUrl);



    });

    // Refer to W6: working-movie-app-solved
    $("#submit-btn").on("click", function () {

        query = $("#animal").val().trim().toLowerCase();
        queryUrl = initialUrl + query;
        console.log(query);

        $.ajax({
                url: queryUrl,
                method: 'GET'
            })
            .then(function (response) {

                console.log(response);

                for (i = 0; i < 5; i++) {

                    gifUrl = response.data[i].images.downsized.url;
                    console.log(gifUrl);
                    var animalUrl = $("<img>");
                    animalUrl.attr("src", gifUrl);
                    animalUrl.attr("alt", query + " GIF");

                    $("#gifs-here").append(animalUrl);

                    var animalBtn = $("<button>");
                    animalBtn.attr("type", "button");
                    animalBtn.attr("class", "btn btn-primary");
                    animalBtn.text(query);

                };


            });

        console.log(query);
        console.log(queryUrl);

    });


    // function buildQueryURL() {

    // var ratingClassification = ["G", "PG", "PG-13", "R"];
    // var contentRating = ''

    // for (i = 0; i < ratingClassification.length; i++) {
    //     contentRating = i;
    // };
    // console.log(contentRating);





});