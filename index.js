// PhotosAdapter file 
class PhotosAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/photos' 
    }

    getPhotos() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createPhoto(value) {
        const note = {
            body: value 
        }
    

        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            imageUrl: JSON.stringify({photo }).then(res => res.json())  
        })
    }
}

// End PhotosAdapter File 
// app.js file 
class App {
    constructor() {
        console.log('app loaded')
        this.photos = new Photos() 
    }
}
// // end app.js file 

// // photos.js file 

class Photos {
    constructor() {
        this.photos = []
        this.adapter = new PhotosAdapter()
       // this.initBindingAndEventListeners() 
        this.fetchAndLoadPhotos()
    }

    initBindingsAndEventListeners() {
        this.photosContainer = document.getElementById('photos-container') 
        this.newPhotoImageUrl = document.getElementById('new-photo-image-url')
        this.photoForm = document.getElementById('new-image-form') 
        this.photoForm.addEventListener('submit', this.createPhoto.bind(this))  
    }

    createPhoto(e) {
        e.preventDefault()
        const value = this.newPhotoImageUrl.value
        
        this.adapter.createPhoto(value).then(note => {
            this.photos.push(new Photo(photo)) 
            this.render()
        }) 

    }

    fetchAndLoadPhotos() {
        this.adapter
            .getPhotos()
            .then(photos => {
           this.photos.forEach(photo => this.photos.push(new Photo(photo)))  
           console.log("photos here") 
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const photosString = this.photos.map(photo => photo.renderLi()).join('') 
        console.log(photosString);
        const photosContainer = document.getElementById('photos-container')
        photosContainer.innerHTML = `<img src=\'https://unsplash.com/photos/uePn9YCTCY0\' width=\'400px\' height=\'150px\'>`
    }
}

// end photos.js file 

// photo.js file 

class Photo {
    constructor(photoJSON) {
        this.id = photoJSON.id
        this.image_url = photoJSON.image_url 
    }

    renderLi() {
        return `<li>${this.image_url}</li>`
    }
}

// end photo.js file 

// index.js file 

const app = new App()
const photos = new Photos() 
console.log("Helloooo")
new PhotosAdapter().getPhotos().then(console.log) 

// end index.js file 

function getImageUrl() {
    return fetch('http://localhost:3001/photos')
    .then(res => res.json()) 
    .then(data => {
        allThePhotos = data
        showImages(allTheImages) 
    })
}





