console.log("loadshop.js loaded \nloading today's selection");

// start the script on page load
window.onload = init();

/* const weekdays = [
    {
        "name" : "Sunday",
        "eggs" : ["water", "thunder"],
        "toys" : ["paints", "dollhouse"],
        "food" : ["pancakes", "burger", "orange"]
    },
    {
        "name" : "Monday",
        "eggs" : ["thunder", "fire"],
        "toys" : ["puzzle", "camera"],
        "food" : ["omelette", "pizza", "apple"]
    },
    {
        "name" : "Tuesday",
        "eggs" : ["fire", "earth"],
        "toys" : ["ball", "trumpet"],
        "food" : ["oatmeal", "salad", "berries"]
    },
    {
        "name" : "Wednesday",
        "eggs" : ["earth", "light"],
        "toys" : ["book", "tablet"],
        "food" : ["omelette", "burger", "mango"]
    },
    {
        "name" : "Thursday",
        "eggs" : ["light", "dark"],
        "toys" : ["spaceship", "piano"],
        "food" : ["pancakes", "pizza", "berries"]
    },
    {
        "name" : "Friday",
        "eggs" : ["dark", "water"],
        "toys" : ["plush", "tv"],
        "food" : ["oatmeal", "salad", "apple"]
    },
    {
        "name" : "Saturday",
        "eggs" : ["water", "thunder", "fire", "earth", "light", "dark"],
        "toys" : ["bricks", "oven"],
        "food" : ["mcguffin", "tacos", "orange"]
    }
]; */

// function that will be run on page load
function init() {
    const shopContainer = document.getElementById("shop-container");
    const d = new Date();
    let today = d.getDay();
    let todaysFruit = getFruits(today);
    let todaysLunch = getLunch(today);
    let todaysBreakfast = getBreakfast(today);
    let todaysToys = getToys(today);
    let todaysEggs = getEggs(today);

    // there should be SEVEN cards each day: 2 eggs, 2 toys, 3 foods
    // create the first egg card
    const eggCardOne = document.createElement("div");
    eggCardOne.classList.add("card");
    eggCardOne.classList.add("col-md-2");
    const firstInnerHTML = `<img src="http://media.ign.com/boards/images/icons3/pokemon_eggAboutToHatch.gif" class="card-img-top" alt="playing checkers">
                            <div class="card-body">
                                <h2 class="card-text">${todaysEggs[0]}</h2>
                                <p class="card-text">Price: 500 coins</p>
                            </div>`;

    //add the egg card
    eggCardOne.innerHTML = firstInnerHTML;
    shopContainer.appendChild(eggCardOne);

    //create the second egg card
    const eggCardTwo = document.createElement("div");
    eggCardTwo.classList.add("card");
    eggCardTwo.classList.add("col-md-2");
    const secondInnerHTML = `<img src="http://media.ign.com/boards/images/icons3/pokemon_eggAboutToHatch.gif" class="card-img-top" alt="playing checkers">
                            <div class="card-body">
                                <h2 class="card-text">${todaysEggs[1]}</h2>
                                <p class="card-text">Price: 500 coins</p>
                            </div>`;

    //add the card
    eggCardTwo.innerHTML = secondInnerHTML;
    shopContainer.appendChild(eggCardTwo);

    //create the first toy card
    const toyCardOne = document.createElement("div");
    toyCardOne.classList.add("card");
    toyCardOne.classList.add("col-md-2");
    const thirdInnerHTML = `<img src="http://www.clipartbest.com/cliparts/di7/Lod/di7LoddAT.gif" class="card-img-top" alt="playing checkers">
                            <div class="card-body">
                                <h2 class="card-text">${todaysToys[0]}</h2>
                                <p class="card-text">Price: 100 coins</p>
                            </div>`;

    //add the card
    toyCardOne.innerHTML = thirdInnerHTML;
    shopContainer.appendChild(toyCardOne);

    //create the second toy card
    const toyCardTwo = document.createElement("div");
    toyCardTwo.classList.add("card");
    toyCardTwo.classList.add("col-md-2");
    const fourthInnerHTML = `<img src="http://www.clipartbest.com/cliparts/di7/Lod/di7LoddAT.gif" class="card-img-top" alt="playing checkers">
                            <div class="card-body">
                                <h2 class="card-text">${todaysToys[1]}</h2>
                                <p class="card-text">Price: 800 coins</p>
                            </div>`;

    //add the card
    toyCardTwo.innerHTML = fourthInnerHTML;
    shopContainer.appendChild(toyCardTwo);

    //create the first food card (breakfast)
    const foodCardOne = document.createElement("div");
    foodCardOne.classList.add("card");
    foodCardOne.classList.add("col-md-2");
    const fifthInnerHTML = `<img src="https://i.pinimg.com/originals/2f/3c/9f/2f3c9f74446fa9e0c7755755a31c0cd6.gif" class="card-img-top" alt="playing checkers">
                            <div class="card-body">
                                <h2 class="card-text">${todaysBreakfast}</h2>
                                <p class="card-text">Price: 100 coins</p>
                            </div>`;

    //add the card
    foodCardOne.innerHTML = fifthInnerHTML;
    shopContainer.appendChild(foodCardOne);

    //create the second food card (lunch)
    const foodCardTwo = document.createElement("div");
    foodCardTwo.classList.add("card");
    foodCardTwo.classList.add("col-md-2");
    const sixthInnerHTML = `<img src="https://64.media.tumblr.com/8ef2af8268c59849c765560ad52068cf/tumblr_n19bya28HR1sau89xo1_500.gif" class="card-img-top" alt="playing checkers">
                            <div class="card-body">
                                <h2 class="card-text">${todaysLunch}</h2>
                                <p class="card-text">Price: 100 coins</p>
                            </div>`;

    //add the card
    foodCardTwo.innerHTML = sixthInnerHTML;
    shopContainer.appendChild(foodCardTwo);

    //create the third food card (fruit)
    const foodCardThree = document.createElement("div");
    foodCardThree.classList.add("card");
    foodCardThree.classList.add("col-md-2");
    const seventhInnerHTML = `<img src="http://bestanimations.com/media/fruit-veg/760026074pixel-art-strwaberries-gif.gif" class="card-img-top" alt="playing checkers">
                            <div class="card-body">
                                <h2 class="card-text">${todaysFruit}</h2>
                                <p class="card-text">Price: 80 coins</p>
                            </div>`;

    //add the card
    foodCardThree.innerHTML = seventhInnerHTML;
    shopContainer.appendChild(foodCardThree);
}

// returns the fruit of the day
function getFruits(day) {
    // create a set of fruits & add entries
    const fruits = new Set();
    fruits.add("Oranges");
    fruits.add("Apples");
    fruits.add("Berries");
    fruits.add("Mangoes");

    if (day == 0 || day == 6) {
        // return burger for Sun and Sat
        return Array.from(fruits)[0];
    } else if (day == 1 || day == 5) {
        // return apple for Mon and Fri
        return Array.from(fruits)[1];
    } else if (day == 2 || day == 4) {
        // return berries for Tues and Thurs
        return Array.from(fruits)[2];
    } else {
        // return mangoes for Wed
        return Array.from(fruits)[3];
    }
}

// returns the lunch of the day
function getLunch(day) {
    // create a set of lunch foods and add entries
    const lunch = new Set();
    lunch.add("Burger");
    lunch.add("Pizza");
    lunch.add("Salad");
    lunch.add("Tacos");

    if (day == 0 || day == 3) {
        // return burger for Sun and Wed
        return Array.from(lunch)[0];
    } else if (day == 1 || day == 4) {
        // return pizza for Mon and Thurs
        return Array.from(lunch)[1];
    } else if (day == 2 || day == 5) {
        // return salad for Tues and Fri
        return Array.from(lunch)[2];
    } else {
        // return tacos for Sat
        return Array.from(lunch)[3];
    }
}

// returns the breakfast of the day
function getBreakfast(day) {
    // create a set of breakfast foods and add entries
    const breakfast = new Set();
    breakfast.add("Pancakes");
    breakfast.add("Omelette");
    breakfast.add("Oatmeal");
    breakfast.add("McGuffin");

    if (day == 0 || day == 4) {
        // return pancakes for Sun and Thurs
        return Array.from(breakfast)[0];
    } else if (day == 1 || day == 3) {
        // return omelette for Mon and Wed
        return Array.from(breakfast)[1];
    } else if (day == 2 || day == 5) {
        // return oatmeal for Tues and Fri
        return Array.from(breakfast)[2];
    } else {
        // return mcguffin for Sat
        return Array.from(breakfast)[3];
    }
}

//returns the toys of the day
function getToys(day) {
    if (day == 0) {
        // return --- for Sun
        return ["Paints", "Dollhouse"];
    } else if (day == 1) {
        // return --- for Mon
        return ["Puzzle", "Camera"];
    } else if (day == 2) {
        // return --- for Tues
        return ["Ball", "Trumpet"];
    } else if (day == 3) {
        // return --- for Wed
        return ["Book", "Tablet"];
    } else if (day == 4) {
        // return --- for Thurs
        return ["Spaceship", "Piano"];
    } else if (day == 5) {
        // return --- for Fri
        return ["Plush", "TV"];
    } else {
        // return --- for Sat
        return ["Bricks", "Oven"];
    }
}

//returns the toys of the day
function getEggs(day) {
    if (day == 0) {
        // return --- for Sun
        return ["Water", "Thunder"];
    } else if (day == 1) {
        // return --- for Mon
        return ["Thunder", "Fire"];
    } else if (day == 2) {
        // return --- for Tues
        return ["Fire", "Earth"];
    } else if (day == 3) {
        // return --- for Wed
        return ["Earth", "Light"];
    } else if (day == 4) {
        // return --- for Thurs
        return ["Light", "Dark"];
    } else if (day == 5) {
        // return --- for Fri
        return ["Dark", "Water"];
    } else {
        // return --- for Sat
        return ["Water", "Thunder", "Fire", "Earth", "Light", "Dark"];
    }
}