axios.get(`https://deckofcardsapi.com/api/deck/new/draw/`).then(resp => {
    console.log(`${resp.data['cards'][0]['value']} of ${resp.data['cards'][0]['suit']}` )
});

function getTwoCards(){
    axios.get(`https://deckofcardsapi.com/api/deck/new/draw/`).then(resp => {
    firstCard = `${resp.data['cards'][0]['value']} of ${resp.data['cards'][0]['suit']}`
    newUrl = `https://deckofcardsapi.com/api/deck/${resp.data['deck_id']}/draw/`
    axios.get(newUrl).then(resp => {
        secondCard = `${resp.data['cards'][0]['value']} of ${resp.data['cards'][0]['suit']}`
        console.log(firstCard,secondCard)
    })
});
}

let deckId = null;
let $btn = $('button');
let $cardArea = $('#card-area');
let baseURL = 'https://deckofcardsapi.com/api/deck';

$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';
  
    let deckId = null;
    let $btn = $('button');
    let $cardArea = $('#card-area');
  
    $.getJSON(`${baseURL}/new/shuffle/`, function(data) {
      deckId = data.deck_id;
      $btn.show();
    });
  
    $btn.on('click', function() {
      $.getJSON(`${baseURL}/${deckId}/draw/`, function(data) {
        let cardSrc = data.cards[0].image;
        $cardArea.append(
          $('<img>', {
            src: cardSrc
          })
        );
        if (data.remaining === 0) $btn.remove();
      });
    });
  });
  