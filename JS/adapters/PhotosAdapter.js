//this talks to the backend API 
class PhotosAdapter {
    constructor() {
        this.baseUrl = 
        'http://localhost:3001/api/v1/photos'
    
    }

    getPhotos() {
        return fetch(this.baseUrl)
          .then(res => res.json())

       
    }
}
    

