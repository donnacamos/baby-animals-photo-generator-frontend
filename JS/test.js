// global variable declarations 
let allPhotos = [] 

// wait for the DOM to load 
document.addEventListener("DOMContentLoaded", init);
  console.log("Hello, World!")
function init(){
    // these are the things that need to happen when the page loads 
    fetchPhotos(console.log("hello, baby animals!"))
}

// send a fetch request to get the photos from the back end 
// translate the response to JavaScript photo objects 
// use a method on the photo objects to append/add to the DOM 

function fetchPhotos(){
  fetch('http://localhost:3001/api/v1/photos')
    .then(response => response.json())
    .then(photoJSON => {
        photoJSON.data.forEach(photo => {
          let newPhoto = new Photo(photo)
        
          newPhoto.formatIndex()
        })
    })
}

class Photo {
    constructor(imageUrl, artistName, id) {
        this.imageUrl = imageUrl 
        this.artistName = artistName
        this.id = id
    }

}

    Photo.prototype.formatIndex = function(){
        let photoHtml = `
        <a href="/photos/${this.imageUrl.id}"><img src="${this.imageUrl.attributes.image_url}" alt=""></a>
        `
        let workingPhoto = document.createElement("img")
        workingPhoto.src = this.imageUrl.attributes.image_url 
        document.querySelector("#main").append(workingPhoto) 
        //return photoHtml 
        // return console.log("Hello, baby elephant!")
    
}