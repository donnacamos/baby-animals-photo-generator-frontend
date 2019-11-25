// global variable declarations 
let allPhotos = [];

// wait for the DOM to load 
document.addEventListener("DOMContentLoaded", init);
  
function init(){
    // these are the things that need to happen when the page loads 
    fetchPhotos()
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
      let counter = 0
      let slideInterval = setInterval(nextPhoto, 3000);

      function nextPhoto() {
        let mainDiv = document.getElementById('main');
        mainDiv.innerHTML = allPhotos[counter % allPhotos.length].render();
        counter += 1; 
      }

      function nextSlide() {
        nextPhoto(allPhotos.length+1); 
      }

      function previousSlide(){
        nextPhoto(allPhotos.length-1); 
      }

    let playing = true;
    let pauseButton = document.getElementById('pause');

    function pauseSlideshow() {
      pauseButton.innerHTML = '&#9658;';
      playing = false;
      clearInterval(slideInterval); 
    }

    function playSlideshow() {
      pauseButton.innerHTML = '&#10074;&#10074;';
      playing = true;
      slideInterval = setInterval(nextPhoto, 3000); 
    }

    pauseButton.onclick = function() {
      if(playing) {
      pauseSlideshow();
      } else {
      playSlideshow();
      }
    };

    next.onclick = function() {
      pauseSlideshow();
      nextSlide();
    }

    previous.onclick = function() {
      pauseSlideshow();
      previousSlide();
    }
  });    
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
    <img src="${this.imageUrl}" height="500px" width="600px" class="slide showing rounded-corners"/> 
    <p>photo credit: ${this.artistName}</p> 
  `
};





//     Photo.prototype.formatIndex = function(){
        
//         let workingPhoto = document.createElement("img")
//         workingPhoto.src = this.imageUrl.attributes.image_url 
//         document.querySelector("#main").append(workingPhoto) 
        
//         let counter = 0; 
//         let mainDiv = document.getElementById('main')

//         function nextPhoto() {
//           mainDiv.innerHTML = allPhotos[counter % allPhotos.length];
//           counter += 1;
        
//         }
//         setInterval(nextPhoto, 3000);
        
    
    
// }