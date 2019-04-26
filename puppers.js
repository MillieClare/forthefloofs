

        function loadMainImage() {
            const params = location.search.match(/id=(\w+)/)
            if(params) {
                const id = params[1]
                document.getElementById('main-image').src = getImageById(id).src
            }
        }
        window.addEventListener('load', loadMainImage)
