
// app.js file 
// class App {
//     constructor() {
//         console.log('app loaded')
//         this.photos = new Photos() 
//     }
// }
// // end app.js file 

// // photos.js file 

// class Photos {
//     constructor() {
//         this.photos = []
//         this.adapter = new PhotosAdapter()
//        // this.initBindingAndEventListeners() 
//         this.fetchAndLoadPhotos()
//     }

//     initBindingsAndEventListeners() {
//         this.photosContainer = document.getElementById('photos-container') 
//         this.newPhotoImageUrl = document.getElementById('new-photo-image-url')
//         this.photoForm = document.getElementById('new-image-form') 
//         this.photoForm.addEventListener('submit', this.createPhoto.bind(this))  
//     }

//     createPhoto(e) {
//         e.preventDefault()
//         const value = this.newPhotoImageUrl.value
        
//         this.adapter.createPhoto(value).then(note => {
//             this.photos.push(new Photo(photo)) 
//             this.render()
//         }) 

//     }

//     fetchAndLoadPhotos() {
//         this.adapter
//             .getPhotos()
//             .then(photos => {
//            this.photos.forEach(photo => this.photos.push(new Photo(photo)))  
//            console.log("photos here") 
//         })
//         .then(() => {
//             this.render()
//         })
//     }

//     render() {
//         const photosString = this.photos.map(photo => photo.renderLi()).join('') 
//         console.log(photosString);
//         const photosContainer = document.getElementById('photos-container')
//         photosContainer.innerHTML = `<img src=\'https://unsplash.com/photos/uePn9YCTCY0\' width=\'400px\' height=\'150px\'>`
//     }
// }

// end photos.js file 

// photo.js file 

// class Photo {
//     constructor(photoJSON) {
//         this.id = photoJSON.id
//         this.image_url = photoJSON.image_url 
//     }

//     renderLi() {
//         return `<li>${this.image_url}</li>`
//     }
// }

// end photo.js file 

// index.js file 

// const app = new App()
// const photos = new Photos() 
// console.log("Helloooo")
// new PhotosAdapter().getPhotos().then(console.log) 

// end index.js file 
fetch("http://localhost:3001/api/v1/photos/1")
    .then(response => response.json())
    .then(photoJSON => console.log(photoJSON)) 

function renderThePhoto(photoJSON){
    newPhoto = new Photo(photoJSON)
    document.getElementById("thumbs-container").innerHTML = newPhoto.renderShow()
}
// function getImageUrl() {
//     return fetch('http://localhost:3001/photos')
//     .then(res => res.json()) 
//     .then(data => {
//         allThePhotos = data
//         showImages(allTheImages) 
//     }



    class Photo {
        constructor(name, src, artist) {
        this.name = name; 
        this.src = src;
        this.artist = artist; 
        }
            createPhoto = function(){
                let container = document.getElementById('thumbs_container');
                let img = document.createElement('img'); 
                let element = document.getElementById('artist')
                element.textContent = this.artist; 
                img.src = this.src;
                img.alt = this.name; 
                img.className = 'thumb';
                img.id = 'photo';
                img.style.height = '300px';
                img.style.width = '400px';
                container.appendChild(img);
            }

            removePhoto = function(){
                document.getElementById('photo').remove();
            }
    }

   
    const photo1 = new Photo('Elephant', 'https://images.unsplash.com/photo-1449104532935-d9209c70e2b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9', 'David Clode'); 
    const photo2 = new Photo('Kitten', 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9', 'Andrii Podilnyk');
    const photo3 = new Photo('Puppy', 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9', 'Hannah Grace');
    photo1.createPhoto();
    // photo2.create();
    // photo3.create();

   const nextButton =  document.getElementById('next');
   
   nextButton.addEventListener("click", function(){
       photo1.removePhoto();
       photo2.createPhoto(); 
       // add next photo 
   });

   const previousButton = document.getElementById('previous');
   
   previousButton.addEventListener("click", function(){
       photo2.removePhoto();
       photo1.createPhoto();
   });

   const playButton = document.getElementById('play');

   playButton.addEventListener("click", function(){
       alert("Play now"); 
   });

   const pauseButton = document.getElementById('pause');

   pauseButton.addEventListener("click", function(){
       alert("Pause alert");
   });

   const stopButton = document.getElementById('stop');

   stopButton.addEventListener("click", function(){
    alert("Stop alert");
   }); 

// const slides = document.querySelectorAll('#slides .slide');
// let currentSlide = 0;
// let slideInterval = setInterval(nextSlide, 2000);

// function nextSlide() {
//     goToSlide(currentSlide+1);
// }

// function previousSlide() {
//     goToSlide(currentSlide-1);
// }

// function goToSlide(n) {
//     slides[currentSlide].className = 'slide';
//     currentSlide = (n+slides.length)%slides.length;
//     slides[currentSlide].className = 'slide showing';
// }

// const next = document.getElementById('next');
// const previous = document.getElementById('previous');

// next.onclick = function() {
//     pauseSlideshow();
//     nextSlide();
// };
// previous.onclick = function() {
//     pauseSlideshow();
//     previousSlide();
// };

// let playing = true;
// let pauseButton = document.getElementById('pause');

// function pauseSlideshow() {
//     pauseButton.innerHTML = 'Play';
//     playing = false;
//     clearInterval(slideInterval);
// }

// function playSlideshow() {
//     pauseButton.innerHTML = 'Pause';
//     playing = true;
//     slideInterval = setInterval(nextSlide,2000);
// }

// pauseButton.onclick = function() {
//     if(playing) {
//         pauseSlideshow();
//     } else {
//         playSlideshow(); 
//     }
// }