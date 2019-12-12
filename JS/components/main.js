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
          let newPhoto = new Photo(attributes.image_url, attributes.artist_name, photo.id, attributes.photo_with_comments);
          allPhotos.push(newPhoto); 


        })
    })
    .then(() => {

      let counter = 0; 
      let slideInterval = setInterval(slidePhoto, 3000); 

    

      function slidePhoto() {
        let mainDiv = document.getElementById('main');
        mainDiv.innerHTML = allPhotos[counter % allPhotos.length].renderData();  
        allPhotos[counter % allPhotos.length].showComments();  
        counter += 1;
      }
      
      
      function nextPhoto() {
        let mainDiv = document.getElementById('main');
        let url = mainDiv.children[0].src;
        let find = allPhotos.find(photo => photo.imageUrl == url);
        let index = allPhotos.indexOf(find);
        mainDiv.innerHTML = allPhotos[index+1].renderData();  
      }

      function previousPhoto() {
        let mainDiv = document.getElementById('main');
        let url = mainDiv.children[0].src;
        let find = allPhotos.find(photo => photo.imageUrl == url);
        let index = allPhotos.indexOf(find);
        mainDiv.innerHTML = allPhotos[index-1].renderData();
         
      }

      function nextSlide() {
        nextPhoto(); 
      }

      function previousSlide(){
        previousPhoto(); 
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
      slideInterval = setInterval(nextSlide, 3000); 
    }

    pauseButton.onclick = function() {
      if(playing) {
      pauseSlideshow();
      } else {
      playSlideshow();
      }
    };

    let next = document.getElementById('next');
    let previous = document.getElementById('previous');

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
    constructor(imageUrl, artistName, id, photoWithComments) {
        this.imageUrl = imageUrl; 
        this.artistName = artistName;
        this.id = id;
        this.photoWithComments = photoWithComments; 
        
    }
        showComments () {
 
          this.photoWithComments.forEach(comment => {
             this.photoWithComments.push(new Comment(comment)) 
             let listComment = document.createElement("li")
             listComment.innerText = comment.body
             document.getElementById("comments").appendChild(listComment)  
          })
      }
 
 renderData() { 
   console.log(this.id) 
  return `
    <img src="${this.imageUrl}" height="500px" width="600px" class="slide showing rounded-corners"/> 
    <p>photo credit: ${this.artistName}</p> 
    <ul id="comments" data-id=${this.id}>  
    </ul>
    `
  
}

}





