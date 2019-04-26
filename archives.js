
console.log("this is the archives page");
insertDoggosColumns()

//archive pages list of all dogs

function insertDoggosColumns() {
    // 3 columns currently. could make 4 but would have to add 'column-3' into archives.html
    const columnsCount = 3;
    let strImage;
    const columns = [...Array(columnsCount)].map(e => '')
    for (let i = 0; i <= floofs.length; i += columnsCount) {
        for (let col = 0; col < columnsCount && i + col < floofs.length; col++) {
            const currentFluff = i + col
            //template literals to put everything in as a string
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
        //appending images to corresponding columns
            columns[col % columnsCount] += strImage;
        }
    }
    // makes sure we only put images into 3 columns 'column-${col}' is ID of columns in archives.html
    for (let col = 0; col < columnsCount; col++) {
        document.getElementById(`column-${col}`).innerHTML = columns[col]
    }
}
