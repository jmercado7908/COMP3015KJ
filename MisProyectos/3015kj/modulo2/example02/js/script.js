$(document).ready(
    function() {

        $('#btnCambiar').click(function(){

            $('h1').css('color', 'red')
                .css('background-color', 'gold')
                .css('font-size', '5em')
                .css('border', '1px solid red')
                .css('padding', '10px');

            $('p').css('color','blue');

        });
    }
)