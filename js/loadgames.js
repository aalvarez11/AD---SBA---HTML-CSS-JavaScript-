console.log("loadgames.js loaded \nloading stored games");

// start the script on page load
window.onload = init();

// function that will be run on page load
function init() {
    const gamesContainer = document.getElementById("games-container");

    //make the first card
    const firstCard = document.createElement("div");
    firstCard.classList.add("card");
    firstCard.classList.add("col-md-2");
    const firstInnerHTML = `<img src="https://c.tenor.com/h43jy3QwF70AAAAd/tenor.gif" class="card-img-top" alt="playing checkers">
                            <div class="card-body">
                                <h2 class="card-text">Checkers</h2>
                                <p class="card-text">win up to 100 coins</p>
                            </div>`;

    //add the card
    firstCard.innerHTML = firstInnerHTML;
    gamesContainer.appendChild(firstCard);

    //make the second card
    const secondCard = document.createElement("div");
    secondCard.classList.add("card");
    secondCard.classList.add("col-md-2");
    const secondInnerHTML = `<img src="https://bartvwezel.nl/wp-content/uploads/2020/09/ezgif.com-video-to-gif-8.gif" class="card-img-top" alt="playing checkers">
                            <div class="card-body">
                                <h2 class="card-text">Tic-Tac-Toe</h2>
                                <p class="card-text">win up to 50 coins</p>
                            </div>`;

    //add the card
    secondCard.innerHTML = secondInnerHTML;
    gamesContainer.appendChild(secondCard);

    //make the second card
    const thirdCard = document.createElement("div");
    thirdCard.classList.add("card");
    thirdCard.classList.add("col-md-2");
    const thirdInnerHTML = `<img src="https://i.redd.it/m8a4qtfmbg921.gif" class="card-img-top" alt="playing checkers">
                            <div class="card-body">
                                <h2 class="card-text">Tower Defense</h2>
                                <p class="card-text">win up to 300 coins</p>
                            </div>`;

    //add the card
    thirdCard.innerHTML = thirdInnerHTML;
    gamesContainer.appendChild(thirdCard);

    //make the second card
    const fourthCard = document.createElement("div");
    fourthCard.classList.add("card");
    fourthCard.classList.add("col-md-2");
    const fourthInnerHTML = `<img src="https://media.tenor.co/images/f3c52fc364f37b82fc2bfeb5a14caf03/raw" class="card-img-top" alt="playing checkers">
                            <div class="card-body">
                                <h2 class="card-text">Cadence Paradise</h2>
                                <p class="card-text">win up to 200 coins</p>
                            </div>`;

    //add the card
    fourthCard.innerHTML = fourthInnerHTML;
    gamesContainer.appendChild(fourthCard);
}