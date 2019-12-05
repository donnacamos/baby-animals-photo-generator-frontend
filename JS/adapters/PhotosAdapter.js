//this talks to the backend API 
class PhotosAdapter {
    constructor() {
        this.baseUrl = 
        'http://localhost:3001/api/v1/photos'
        //pull the JSON data from here
    }

    getPhotos() {
        return fetch(this.baseUrl)
          .then(res => res.json())

        //this gets the photo information from the database
        //.json() returns "a Promise that resolves to a JS object."
        // This object could be anything that can be represented by JSON
    }
}
    

