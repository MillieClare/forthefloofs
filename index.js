
console.log("this is the homepage");
//main page shuffle and tick up function.

let shuffleButton = document.getElementById("shuffleButton");

shuffleButton.addEventListener("click", e => {
    getNewFloofImage();
    e.preventDefault();
});


//get new dog image
function getNewFloofImage() {
    const arrayPosition = Math.floor(Math.random() * (floofs.length));
    console.log('Floof number:', arrayPosition);
    document.getElementById("main-image").src = floofs[arrayPosition].src;
    document.getElementById("main-image-link").href = `puppers.html?id=${floofs[arrayPosition].id}`;
    document.getElementById("floofLike").dataset.floofId = arrayPosition;
    document.getElementById("floofDislike").dataset.floofId = arrayPosition;
    return arrayPosition;
}



// call shuffle
getNewFloofImage();