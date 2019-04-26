
console.log("this is the archives page");
insertDoggosColumns()

//archive pages list of all dogs

function insertDoggosColumns() {
    const columnsCount = 3;
    let strImage;
    const columns = [...Array(columnsCount)].map(e => '')
    for (let i = 0; i <= floofs.length; i += columnsCount) {
        for (let col = 0; col < columnsCount && i + col < floofs.length; col++) {
            const currentFluff = i + col
            strImage = `<div class="image-container"><a href="puppers.html?id=${floofs[currentFluff].id}"><img src="` + floofs[currentFluff].src + `" /></a>
            <div class="row overlay-bar">
            <div class="column">
                <a href="#" id="floofLike" class="button floofLike" data-floof-id="${currentFluff}">
                    <i class="far fa-lg fa-thumbs-up button"></i>
                </a>
            </div>
            <div class="column">
                    <a href="#" id="floofDislike" class="button floofDislike" data-floof-id="${currentFluff}">
                        <i class="far fa-lg fa-thumbs-down button"></i>
                    </a>
            </div>
            <div class="column share-button">
                    <a href="#" id="floofShare" class="button" >
                        <i class="fas fa-lg fa-share-alt"></i>
                    </a>
            </div>
        </div>
        </div>`
            columns[col % columnsCount] += strImage;
        }
    }
    for (let col = 0; col < columnsCount; col++) {
        document.getElementById(`column-${col}`).innerHTML = columns[col]
    }
}
