
        //get id of floof
        function getId() {
            const params = location.search.match(/id=(\w+)/)
            if(params) {
                return params[1]
            } else {
                throw new Error('No such id')
            }
        }
        //load floof image
        function loadMainImage() {
            const id = getId()
            document.getElementById('main-image').src = getImageById(id).src
            
        }
        //event listener for click on share button
        let floofShareEvent = document.getElementById("floofShare");
        floofShareEvent.addEventListener("click", e=>{
            const id = getId()
            const puppy = getImageById(id)
            shareDoggos(puppy.id, puppy.alt);
            e.preventDefault();
        })
        window.addEventListener('load', loadMainImage)


