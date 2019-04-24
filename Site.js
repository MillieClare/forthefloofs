// Notes
// How can these images be displayed interestingly on an archive page?

document.addEventListener('DOMContentLoaded', function () {
    console.log("you're up and running!");
});

let floofs = [
    {
        "name": "cute_pupper",
        "src": "doggos/cute_pupper.gif",
        "alt": "cute_pupper",
        "likes": 0,
        "dislikes": 0,
    },
    {
        "name": "dog_ears",
        "src": "doggos/dog_ears.gif",
        "alt": "dog_ears",

    },
    {
        "name": "high_five",
        "src": "doggos/high_five.gif",
        "alt": "high_five",
    },
    {
        "name": "hug",
        "src": "doggos/hug.gif",
        "alt": "hug",
    },
    {
        "name": "pizza",
        "src": "doggos/pizza.gif",
        "alt": "pizza",
    },
    {
        "name": "squint_smile",
        "src": "doggos/squint_smile.gif",
        "alt": "squint_smile",
    },
    {
        "name": "superman",
        "src": "doggos/superman.gif",
        "alt": "superman",
    },
    {
        "name": "tail_face",
        "src": "doggos/tail_face.gif",
        "alt": "tail_face",
    },
    {
        "name": "racing",
        "src": "doggos/racing.gif",
        "alt": "racing_pupper",
        "likes": 0,
        "dislikes": 0,
    },
    {
        "name": "dogslope",
        "src": "doggos/dogslope.gif",
        "alt": "dogslope",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "raindrop",
        "src": "doggos/raindrop.gif",
        "alt": "raindrop",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "lazydog",
        "src": "doggos/lazydog.gif",
        "alt": "lazydog",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "happydog",
        "src": "doggos/happydog.gif",
        "alt": "happydog",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "breadhead",
        "src": "doggos/breadhead.gif",
        "alt": "breadhead",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "phoneeyes",
        "src": "doggos/phoneeyes.gif",
        "alt": "phoneeyes",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "hug2",
        "src": "doggos/hug2.gif",
        "alt": "hug2",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "tinyfloof",
        "src": "doggos/tinyfloof.gif",
        "alt": "tinyfloof",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "workingout",
        "src": "doggos/workingout.gif",
        "alt": "workingout",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "hotdog",
        "src": "doggos/hotdog.gif",
        "alt": "hotdog",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "snow",
        "src": "doggos/snow.gif",
        "alt": "snow",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "shake",
        "src": "doggos/shake.gif",
        "alt": "shake",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "sit",
        "src": "doggos/sit.gif",
        "alt": "sit",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "crawlaway",
        "src": "doggos/crawlaway.gif",
        "alt": "crawlaway",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "treadmill",
        "src": "doggos/treadmill.gif",
        "alt": "treadmill",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "doggypaddle",
        "src": "doggos/doggypaddle.gif",
        "alt": "doggypaddle",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "dance",
        "src": "doggos/dance.gif",
        "alt": "dance",
        "likes": 0,
        "dislikes": 0,
    },    {
        "name": "smiley",
        "src": "doggos/smiley.gif",
        "alt": "smiley",
        "likes": 0,
        "dislikes": 0,
    },
    {
        "name": "twoforone",
        "src": "doggos/twoforone.gif",
        "alt": "twoforone",
        "likes": 0,
        "dislikes": 0,
    },
]

//main page shuffle and tick up function.
let arrayPosition;

let floofShuffle = document.getElementById("shuffleButton");
floofShuffle.addEventListener("click", getNewFloofImage);

function getNewFloofImage() {
    arrayPosition = Math.floor(Math.random() * (floofs.length));
    console.log(arrayPosition);
    document.getElementById("main-image").src = floofs[arrayPosition].src;
    return arrayPosition;
}

let floofLike = document.getElementById("floofLike"),
    floofDislike = document.getElementById("floofDislike"),
    floofLikeCounter = 0,
    floofDislikeCounter = 0;

floofLike.addEventListener("click", tickUpLike);
floofDislike.addEventListener("click", tickUpDislike);

function tickUpLike() {
    floofLikeCounter += 1;
    console.log(floofLikeCounter);
}

function tickUpDislike() {
    floofDislikeCounter += 1;
    console.log(floofDislikeCounter);
}

//archive pages list of all dogs
document.getElementById("all-dogs").src = floofs.src;

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