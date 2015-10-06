$('document').ready(function(){
var x = document.getElementById('send');

    var _ = 10;
    console.log(_);
    $( document ).on( "click", ".window li", function() {
       $(this).fadeOut();
    });

    $('#send').click(function(e){

        var message = $('#mess').val();



        $('.window ul').append('<li class="my">'+message);

        $.ajax({
            method: "POST",
            url: "chat.php",
            data: { m: message }
        }).done(function( data ) {
            $('.window ul').append('<li class="answer">'+data);
        });

    });

});
