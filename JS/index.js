
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
fetch("/photos/1")
    .then(response => response.json())
    .then(photoJSON => renderThePhoto(photoJSON)) 

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

(function(){

    function Photo(name, src) {
        this.name = name;
        this.src = src;
            this.create = function(){
                let container = document.getElementById('thumbs_container');
                let img = document.createElement('img');
                img.src = this.src;
                img.alt = this.name;
                img.className = 'thumb';
                img.style.width = '400px';
                container.appendChild(img);
            }
    }

    const photo1 = new Photo('Elephant', 'https://images.unsplash.com/photo-1449104532935-d9209c70e2b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9')

    photo1.create();
})(); 







