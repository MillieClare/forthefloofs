document.addEventListener('DOMContentLoaded', function () {
    console.log("you're up and running!");
});

let floofs = [
    {
        "id": "cute_pupper",
        "src": "doggos/cute_pupper.gif",
        "alt": "cute_pupper",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "dog_ears",
        "src": "doggos/dog_ears.gif",
        "alt": "dog_ears",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "high_five",
        "src": "doggos/high_five.gif",
        "alt": "high_five",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "hug",
        "src": "doggos/hug.gif",
        "alt": "hug",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "pizza",
        "src": "doggos/pizza.gif",
        "alt": "pizza",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "squint_smile",
        "src": "doggos/squint_smile.gif",
        "alt": "squint_smile",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "superman",
        "src": "doggos/superman.gif",
        "alt": "superman",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "tail_face",
        "src": "doggos/tail_face.gif",
        "alt": "tail_face",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "racing",
        "src": "doggos/racing.gif",
        "alt": "racing_pupper",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "dogslope",
        "src": "doggos/dogslope.gif",
        "alt": "dogslope",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "raindrop",
        "src": "doggos/raindrop.gif",
        "alt": "raindrop",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "lazydog",
        "src": "doggos/lazydog.gif",
        "alt": "lazydog",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "happydog",
        "src": "doggos/happydog.gif",
        "alt": "happydog",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "breadhead",
        "src": "doggos/breadhead.gif",
        "alt": "breadhead",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "phoneeyes",
        "src": "doggos/phoneeyes.gif",
        "alt": "phoneeyes",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "hug2",
        "src": "doggos/hug2.gif",
        "alt": "hug2",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "tinyfloof",
        "src": "doggos/tinyfloof.gif",
        "alt": "tinyfloof",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "workingout",
        "src": "doggos/workingout.gif",
        "alt": "workingout",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "hotdog",
        "src": "doggos/hotdog.gif",
        "alt": "hotdog",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "snow",
        "src": "doggos/snow.gif",
        "alt": "snow",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "shake",
        "src": "doggos/shake.gif",
        "alt": "shake",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "sit",
        "src": "doggos/sit.gif",
        "alt": "sit",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "crawlaway",
        "src": "doggos/crawlaway.gif",
        "alt": "crawlaway",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "treadmill",
        "src": "doggos/treadmill.gif",
        "alt": "treadmill",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "doggypaddle",
        "src": "doggos/doggypaddle.gif",
        "alt": "doggypaddle",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "dance",
        "src": "doggos/dance.gif",
        "alt": "dance",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "smiley",
        "src": "doggos/smiley.gif",
        "alt": "smiley",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "twoforone",
        "src": "doggos/twoforone.gif",
        "alt": "twoforone",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "bathtime",
        "src": "doggos/bathtime.gif",
        "alt": "bathtime",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "haircut",
        "src": "doggos/haircut.gif",
        "alt": "haircut",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "handstand",
        "src": "doggos/handstand.gif",
        "alt": "handstand",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "smol",
        "src": "doggos/smol.gif",
        "alt": "smol",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "staring",
        "src": "doggos/staring.gif",
        "alt": "staring",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "hoover",
        "src": "doggos/hoover.gif",
        "alt": "hoover",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "buddies",
        "src": "doggos/buddies.gif",
        "alt": "buddies",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "highfivesit",
        "src": "doggos/highfivesit.gif",
        "alt": "highfivesit",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "splash",
        "src": "doggos/splash.gif",
        "alt": "splash",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "dogwink",
        "src": "doggos/dogwink.gif",
        "alt": "dogwink",
        "likes": 0,
        "dislikes": 0,
    }, {
        "id": "pawfight",
        "src": "doggos/pawfight.gif",
        "alt": "pawfight",
        "likes": 0,
        "dislikes": 0,
    },
].sort(() => .5 - Math.random());

//likes and dislikes
document.addEventListener("click", e => {
    const targetLink = e.target.closest('a'); //target link
    if (targetLink) {
        const targetClass = targetLink.classList.contains('floofLike') ? 'like' : targetLink.classList.contains('floofDislike') ? 'dislike' : ''
        if (targetClass) {
            const id = parseInt(targetLink.dataset.floofId);
            if (targetClass === 'like') {
                tickUpLike(id);
            } else {
                tickUpDislike(id);
            }
            e.preventDefault();
        }
    }

});

if (!('share' in navigator)) {
    document.body.classList.add('no-share')
}
//for puppers
function getImageById(id) {
    return floofs.find(item => item.id === id)
}

//get id of floof
function getId() {
    const params = location.search.match(/id=(\w+)/)
    if (params) {
        return params[1]
    } else {
        const index = Math.floor(Math.random() * floofs.length);
        return floofs[index].id;
    }
}

// Web Share API
function shareDoggos(title, text) {
    if (navigator.share) {
        navigator.share({
            title,
            text,
            url: `${location.origin}/forthefloofs/puppers.html?id=${title}`
        })
            .then(() => console.log('Successful share'))
            .catch((error) => {
                console.log('Error sharing', error);
            })
    }
}

// share buttons
let floofShareButton = document.getElementById("floofShare");
if (floofShareButton) {
    floofShareButton.addEventListener("click", e => {
        const id = getId()
        const puppy = getImageById(id)
        shareDoggos(puppy.id, puppy.alt);
        e.preventDefault();
    })
}

// likes & dislikes
function tickUpLike(index) {
    const floof = floofs[index];
    floof.likes++;
    console.log('-----> Floof likes', floof.id, floof.likes);
}
function tickUpDislike(index) {
    const floof = floofs[index];
    floof.dislikes++;
    console.log('-----> Floof dislikes', floof.id, floof.dislikes);
}