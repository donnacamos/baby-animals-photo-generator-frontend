// global variable declarations 
const allPhotos = [];
let counter = 0;

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
          const attributes = photo.attributes;
          let newPhoto = new Photo(attributes.image_url, attributes.artist_name, photo.id);
          allPhotos.push(newPhoto);
        })
    })
    .then(() => {
      let mainDiv = document.getElementById('main');
      mainDiv.innerHTML = allPhotos[0].render();
      setInterval(nextPhoto, 3000);
    });
}

function nextPhoto() {
  let mainDiv = document.getElementById('main');
  mainDiv.innerHTML = allPhotos[counter % allPhotos.length].render();
  counter += 1;
}

class Photo {
    constructor(imageUrl, artistName, id) {
      this.imageUrl = imageUrl
      this.artistName = artistName
      this.id = id
    }
}

Photo.prototype.render = function () {
    return `
      <img src="${this.imageUrl}"/> 
    `
};
