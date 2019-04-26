
console.log("this is the archives page");
insertDoggosColumns()

//archive pages list of all dogs

function insertDoggosColumns() {
    const columnsCount = 3;
    let strImage;
    const columns = [...Array(columnsCount)].map(e => '')
    for (let i = 0; i <= floofs.length; i += columnsCount) {
        for (let col = 0; col < columnsCount && i + col < floofs.length; col++) {

            strImage = `<a href="puppers.html?id=${floofs[i + col].id}"><img src="` + floofs[i + col].src + '" /></a.>'
            columns[col % columnsCount] += strImage;
        }
    }
    for (let col = 0; col < columnsCount; col++) {
        document.getElementById(`column-${col}`).innerHTML = columns[col]
    }
}
