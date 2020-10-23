
(function () {

    //declaration 
    var card = document.getElementsByClassName('card');            //get card
    var selectCard = false;                                       //selected Card start is false
    var firstCard, secondCard;

    //shuffle cards
    function shuffleCard() {
        for (var i = 0; i < card.length; i++) {
            card[i].style.order = Math.floor(Math.random() * 12) + 1;
        }
    }

    //call shuffle card
    shuffleCard();

    for (var i = 0; i < card.length; i++) {
        card[i].addEventListener('click', flipCard);
    }
    // flip card action 
    function flipCard() {

        if (this === firstCard) {                          // if this firstcard is flip return it 
            return;
        }

        this.classList.add('flip');                     // add flip class to first click and transform by rotate to show frontCard

        if (!selectCard) {                                // first select is false then  select is true and select firstCard
            selectCard = true;
            firstCard = this;
            return;
        } else {                                         //if select secoundCard he secect is false and secelt secoundCard
            selectCard = false;
            secondCard = this;
        }

        checkCard();                                      // check the two cards
    }

    //check two cards
    function checkCard() {
        if (firstCard.getAttribute('name') === secondCard.getAttribute('name')) {
            removeCards();
        } else {
            resetCards();
        }
    }

    //remove Cards if matched
    function removeCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        setTimeout(function () {
            firstCard.style.visibility = secondCard.style.visibility = 'hidden';
            resetMemory();
        }, 500);
    }

    //resetcards if cards unmatched
    function resetCards() {
        selectCard = false;
        setTimeout(function () {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetMemory();
        }, 500);
    }

    //reset memory to play next 
    function resetMemory() {
        selectCard = false;
        firstCard = null;
        secondCard = null;
    }

})()



