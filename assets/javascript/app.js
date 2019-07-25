$(document).ready(function () {

    $("#submit-btn").on("click", function () {

        var query = $('#animal').val().trim();
        console.log(query);

        function buildQueryURL() {

            var startUrl = "api.giphy.com/v1/gifs/search?";
            var apiKey = "api_key=jr4aVK0FtI0qBftQR9M21U0ixSWkXggu&q=";
            var ratingClassification = ["G", "PG", "PG-13", "R"];
            var contentRating = ''

            for (i = 0; i < ratingClassification.length; i++) {
                contentRating = i;
            };
            console.log(contentRating);

        };

        var queryUrl = startUrl + apiKey + query + "&" + contentRating;
        console.log(queryUrl);

        $.ajax({
                url: queryUrl,
                method: 'GET'
            })
            .then(function (response) {

            });



    });






});