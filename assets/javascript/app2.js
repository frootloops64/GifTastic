var animals = ['dog', 'cat', 'bird', 'fish'];

function displayGif() {

    var animal = $(this).attr('data-animal');
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=jr4aVK0FtI0qBftQR9M21U0ixSWkXggu&q=" + animal;

    $.ajax({
        url: queryUrl,
        method: 'GET'
    }).then(function (response) {
        
        $('#gifs-here').empty();

        for (i = 0; i < 5; i++) {

            gifUrl = response.data[i].images.downsized.url;

            var b = $("<img>");
            b.attr('class', 'animal-gif')
            b.attr("src", gifUrl);
            b.attr('style', 'margin:5px');
            b.attr("alt", animal + " GIF");
            $("#gifs-here").append(b);

        }

    });
}


function renderButtons() {
    $('#buttons').empty();

    for (i = 0; i < animals.length; i++) {

        var a = $('<button>');
        a.attr('style', 'margin-right:5px');
        a.addClass('animal btn btn-primary');
        a.attr('data-animal', animals[i]);
        a.text(animals[i]);
        $('#buttons').append(a);
    }
}

$('#add-animal').on('click', function (event) {

    event.preventDefault();

    var animal = $('#animal-input').val().trim();

    animals.push(animal);

    renderButtons();

    $('#animal-input').val("");
});

$(document).on('click', '.animal', displayGif);
    
renderButtons();