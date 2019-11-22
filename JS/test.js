// global variable declarations 


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
        
        let workingPhoto = document.createElement("img")
        workingPhoto.src = this.imageUrl.attributes.image_url 
        document.querySelector("#main").append(workingPhoto) 
        let allPhotos = [];
        let obj = {}
        obj["01"] = workingPhoto.image_url;
        obj["02"] = workingPhoto.artist_name; 
        allPhotos.push(obj); 
        let counter = 0; 
        let mainDiv = document.getElementById('main')

        function nextPhoto() {
          mainDiv.innerHTML = allPhotos[counter % allPhotos.length];
          counter += 1;
          debugger
        }
        setInterval(nextPhoto, 3000);
        
    
    
}