console.log("this is the share page");

//load floof image
function loadMainImage() {
    const id = getId()
    document.getElementById('main-image').src = getImageById(id).src

}

window.addEventListener('load', loadMainImage)