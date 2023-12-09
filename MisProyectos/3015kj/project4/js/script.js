$(document).ready(function() {
    sumPlayersCards = 0
    sumComputerCards = 0
    const card = {
        "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, 
        "7": 7, "8": 8, "9": 9, "10": 10, 
        "J": 10, "Q": 10, "K": 10, "A": 11
    };
    const cards = {
        "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, 
        "7": 7, "8": 8, "9": 9, "10": 10, 
        "J": 11, "Q": 12, "K": 13, "A": 14
    };

    $('#hit').click(function(){
        userCards = $("#my-cards").html();
        newCard = getCard(getRandomNumber());
        sumPlayersCards += card[newCard];
        newCard = drawCard (newCard, 'bg-info');
        $('#my-cards').html (userCards + newCard);
        if(sumPlayersCards > 21){
            alert('You lost the game!');
            $('#stand').attr('disabled', 'disabled');
            $('#hit').attr('disabled', 'disabled');
        }
    });

    $('#stand').click(function(){
        newCard = getCard(getRandomNumber());
        comptCards = '';
        sumComputerCards = 0;
        moreCards = true;
        while (moreCards) {
            $("#compt-cards").html(comptCards + drawCard (newCard, 'bg-warning'));
            comptCards = $("#compt-cards").html();

            sumComputerCards += card[newCard];
            newCard = getCard(getRandomNumber());
            if ((sumComputerCards + card[newCard]) > 21)
            {
                moreCards = false;
                //alert('The Computer losses!')
            }
        }
        if ((sumComputerCards > sumPlayersCards) && (sumComputerCards <= 21)) {
            alert('User losses!');
        }
        else if (sumComputerCards == sumPlayersCards) {
            alert('Tie!');
        }
        else {
            alert('Computer losses!');
        }

        $('#stand').attr('disabled', 'disabled');
        $('#hit').attr('disabled', 'disabled');
    });

    $('#new').on('click', function(){
        sumComputerCards = 0;
        sumPlayersCards = 0;
        $('#stand').prop('disabled', false);
        $('#hit').prop('disabled', false);
        $("#compt-cards").html('');
        $("#my-cards").html('');
    });

    const drawCard = (card, bgcolor) => {
        return `<div class="card ${bgcolor}"><div>${card}</div></div>`;
    };

    const getCard = (random_number) => {       
        return Object.keys(cards).find((card, index) => {
            if (cards[card] == random_number) return cards[card]; 
        });           
    }
    
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 13) + 2; //Bettween 2 and 14
    };

});