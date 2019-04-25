// Notes
// How can these images be displayed interestingly on an archive page?


let floofs = [
    {
        "name": "cute_pupper",
        "src": "doggos/cute_pupper.gif",
        "alt": "cute_pupper",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "dog_ears",
        "src": "doggos/dog_ears.gif",
        "alt": "dog_ears",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "high_five",
        "src": "doggos/high_five.gif",
        "alt": "high_five",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "hug",
        "src": "doggos/hug.gif",
        "alt": "hug",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "pizza",
        "src": "doggos/pizza.gif",
        "alt": "pizza",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "squint_smile",
        "src": "doggos/squint_smile.gif",
        "alt": "squint_smile",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "superman",
        "src": "doggos/superman.gif",
        "alt": "superman",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "tail_face",
        "src": "doggos/tail_face.gif",
        "alt": "tail_face",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "racing",
        "src": "doggos/racing.gif",
        "alt": "racing_pupper",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "dogslope",
        "src": "doggos/dogslope.gif",
        "alt": "dogslope",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "raindrop",
        "src": "doggos/raindrop.gif",
        "alt": "raindrop",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "lazydog",
        "src": "doggos/lazydog.gif",
        "alt": "lazydog",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "happydog",
        "src": "doggos/happydog.gif",
        "alt": "happydog",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "breadhead",
        "src": "doggos/breadhead.gif",
        "alt": "breadhead",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "phoneeyes",
        "src": "doggos/phoneeyes.gif",
        "alt": "phoneeyes",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "hug2",
        "src": "doggos/hug2.gif",
        "alt": "hug2",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "tinyfloof",
        "src": "doggos/tinyfloof.gif",
        "alt": "tinyfloof",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "workingout",
        "src": "doggos/workingout.gif",
        "alt": "workingout",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "hotdog",
        "src": "doggos/hotdog.gif",
        "alt": "hotdog",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "snow",
        "src": "doggos/snow.gif",
        "alt": "snow",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "shake",
        "src": "doggos/shake.gif",
        "alt": "shake",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "sit",
        "src": "doggos/sit.gif",
        "alt": "sit",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "crawlaway",
        "src": "doggos/crawlaway.gif",
        "alt": "crawlaway",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "treadmill",
        "src": "doggos/treadmill.gif",
        "alt": "treadmill",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "doggypaddle",
        "src": "doggos/doggypaddle.gif",
        "alt": "doggypaddle",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "dance",
        "src": "doggos/dance.gif",
        "alt": "dance",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "smiley",
        "src": "doggos/smiley.gif",
        "alt": "smiley",
        "likes": 0,
        "dislikes": 0,
    }, {
        "name": "twoforone",
        "src": "doggos/twoforone.gif",
        "alt": "twoforone",
        "likes": 0,
        "dislikes": 0,
    },
]


document.addEventListener('DOMContentLoaded', function () {
    getNewFloofImage();
    console.log("you're up and running!");
    floofShuffle.addEventListener("click", e=>{
        getNewFloofImage();
        e.preventDefault();
    });
    floofLike.addEventListener("click", e=>{
        tickUpLike();
        e.preventDefault();
    });
    floofDislike.addEventListener("click", e=>{
        tickUpDislike();
        e.preventDefault();
    });

});

//main page shuffle and tick up function.
let arrayPosition;
let floofShuffle = document.getElementById("shuffleButton");
let floofLike = document.getElementById("floofLike");
let floofDislike = document.getElementById("floofDislike");

function getNewFloofImage() {
    arrayPosition = Math.floor(Math.random() * (floofs.length));
    console.log('Floof number:', arrayPosition);
    document.getElementById("main-image").src = floofs[arrayPosition].src;
    return arrayPosition;
}

function tickUpLike() {
    floofs[arrayPosition].likes ++;
    console.log('Floof likes', floofs[arrayPosition].likes);
}

function tickUpDislike() {
    floofs[arrayPosition].dislikes ++;
    console.log('Floof dislikes', floofs[arrayPosition].dislikes);
}

//archive pages list of all dogs
//loops and .append

// potential for one function instead of two
/*
floofLike.addEventListener("click", tickUp);
floofDislike.addEventListener("click", tickUp);
function tickUp(){
  if(document.getElementById("floofLike")){
    floofLikeCounter += 1;
    console.log(floofLikeCounter, "floofLike");
  } else if (document.getElementById("floofDislike")){
      floofDislikeCounter += 1;
      console.log(floofDislikeCounter, "floofDislike");
    }
  }

*/