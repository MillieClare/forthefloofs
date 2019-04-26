
console.log("this is the homepage");
getNewFloofImage();
shuffleButton.addEventListener("click", e => {
    getNewFloofImage();
    e.preventDefault();
});
floofLike.addEventListener("click", e => {
    tickUpLike();
    e.preventDefault();
});
floofDislike.addEventListener("click", e => {
    tickUpDislike();
    e.preventDefault();
});

//main page shuffle and tick up function.
let arrayPosition;
let floofLike = document.getElementById("floofLike");
let floofDislike = document.getElementById("floofDislike");
let shuffleButton = document.getElementById("shuffleButton");

//get new dog image
function getNewFloofImage() {
    arrayPosition = Math.floor(Math.random() * (floofs.length));
    console.log('Floof number:', arrayPosition);
    document.getElementById("main-image").src = floofs[arrayPosition].src;
    document.getElementById("main-image-link").href = `puppers.html?id=${floofs[arrayPosition].id}`;
    return arrayPosition;
}

// likes & dislikes
function tickUpLike() {
    floofs[arrayPosition].likes++;
    console.log('-----> Floof likes', floofs[arrayPosition].likes);
}
function tickUpDislike() {
    floofs[arrayPosition].dislikes++;
    console.log('-----> Floof dislikes', floofs[arrayPosition].dislikes);
}
