class CommentsAdapter {
    constructor() {
      this.baseUrl =
      'http://localhost:3001/api/v1/comments'
      //Oh hey, computer, this is where we want
      //to pull the JSON from
    }
  
    getComments() {
      return fetch(this.baseUrl).then(res => res.json()
  
      //This gets the Location information from the database
      //.json() returns "a Promise that resolves to a JS object.
      //This object could be anything that can be represented by JSON
      // — an object, an array, a string, a number..." -MDN
      )
    }
  
  //This creates a constant to be passed through the POST request
    createComments(body) {
      const commentData = {
        body: body 
      }
  
  //This Posts the "New Location" form information to the backend
      return fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(commentData)
      }).then(res => res.json())
    }

}