let allPhotos = [] 

document.addEventListener("DOMcontentloaded", init);
console.log("Hello, World!")

function init(){
    fetchPhotos()
}

function fetchPhotos(){
    fetch('http://localhost:3001/api/v1/photos')
      .then(resp => resp.json())
      .then(photoJSON => {
        photoJSON.data.forEach(photo => {
            let newPhoto = new Photo(photo)

            let photoHtml = newPhoto.formatIndex()
        })
      })
}

Photo.prototype.formatIndex = function(){
    let photoHtml = `
    <a href="/photos/${this.id}"><img src="${this.imageUrl}" alt=""></a>
    `
    return photoHtml 
}


// fetch("http://localhost:3001/api/v1/photos/1")
//     .then(response => response.json())
//     .then(photoJSON => console.log(photoJSON)) 

// function renderThePhoto(photoJSON){
//     newPhoto = new Photo(photoJSON)
//     document.getElementById("thumbs-container").innerHTML = newPhoto.renderShow()
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

//     class Photo {
//         constructor(name, src, artist) {
//         this.name = name; 
//         this.src = src;
//         this.artist = artist; 
//         }
//             createPhoto = function(){
//                 let container = document.getElementById('thumbs_container');
//                 let img = document.createElement('img'); 
//                 let element = document.getElementById('artist') 
//                 element.textContent = this.artist; 
//                 img.src = this.src;
//                 img.alt = this.name; 
//                 img.className = 'thumb';
//                 img.id = 'photo';
//                 img.style.height = '300px';
//                 img.style.width = '400px';
//                 container.appendChild(img);
//             }

//             removePhoto = function(){
//                 document.getElementById('photo').remove();
//             }
//     }

   
//     const photo1 = new Photo('Elephant', 'https://images.unsplash.com/photo-1449104532935-d9209c70e2b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9', 'David Clode'); 
//     const photo2 = new Photo('Kitten', 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9', 'Andrii Podilnyk');
//     const photo3 = new Photo('Puppy', 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9', 'Hannah Grace');
    
//     photo1.createPhoto();
//     // photo2.create();
//     // photo3.create();

//    const nextButton =  document.getElementById('next');
   
//    nextButton.addEventListener("click", function(){
//        photo1.removePhoto();
//        photo2.createPhoto(); 
//        // add next photo 
//    });

//    const previousButton = document.getElementById('previous');
   
//    previousButton.addEventListener("click", function(){
//        photo2.removePhoto();
//        photo1.createPhoto();
//    });

//    const playButton = document.getElementById('play');

//    playButton.addEventListener("click", function(){
//        alert("Play now"); 
//    });

//    const pauseButton = document.getElementById('pause');

//    pauseButton.addEventListener("click", function(){
//        alert("Pause alert");
//    });

//    const stopButton = document.getElementById('stop');

//    stopButton.addEventListener("click", function(){
//     alert("Stop alert");
//    });
//    const previousButton = document.getElementById('previous');
   
//    previousButton.addEventListener("click", function(){
//        photo2.removePhoto();
//        photo1.createPhoto();
//    });

//    const playButton = document.getElementById('play');

//    playButton.addEventListener("click", function(){
//        alert("Play now"); 
//    });

//    const pauseButton = document.getElementById('pause');

//    pauseButton.addEventListener("click", function(){
//        alert("Pause alert");
//    });

 

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