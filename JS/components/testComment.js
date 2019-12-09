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

    // class Comment 

    class Comment { 
        constructor(commentJSON) {
          this.id = commentJSON.id
          this.body = commentJSON.body
          
        }


    //// class Comments 

    class Comments {
        //index.js instantiates App, which is defined in app.js >
        //app.js instantiates Locations, which is defined here.
        constructor() {
          //Create a new array of locations:
          this.comments = []
          //Make a fetch request to return a Promise
          //defined in LocationsAdapter.js:
          this.adapter = new CommentsAdapter()
          //Establish HTML elements as variables
          //so we can save the information from them:
          this.initBindingsAndEventListeners()
          //Load existing Locations, defined below:
          this.fetchAndLoadComments() 
        }
      
        initBindingsAndEventListeners() {
          this.commentsContainer = document.getElementById('comments-container')
          this.newCommentBody = document.getElementById('new-comment-body')
          this.commentForm = document.getElementById('new-comment-form')
          this.commentForm.addEventListener('submit', this.createComment.bind(this))
        }
      
      //This creates a new Location based on information
      //submitted through the form, then renders it on the page
        createComment(e){
          e.preventDefault()
          const body = this.newCommentBody.value 
          
      
          this.adapter.createComment(body).then(comment => {
            this.comments.push(new Comment(comment)) 
            this.resetField()
            this.render()
          })
        }
      
      //This fetches all existing locations from the backend,
      //and renders it on the page: backend renders JSON,
      // the adapter sets the baseUrl where the JSON is rendered,
      // getLocations uses a fetch request to pull the JSON
        fetchAndLoadComments() {
          this.adapter
            .getComments()
            .then(comments => {
              //Iterate over the JSON locations returned,
              //create a new instance of each (in location.js),
              //and push the new instance into our array
              //(defined in our Locations constructor.)
              comments.forEach(comment => this.comments.push(new Comment(comment)))
          })
          .then(() => {
            this.render()
          })
        }
      
      //Resets form input value after form is submitted
        resetField() {
          this.newCommentBody.value = '' 
          
        }
      
        render() {
          //render the Location list on the visible page by inserting it into the HTML
          this.commentsContainer.innerHTML = this.comments.map(comment =>
            comment.Photo.prototype.render()).join('')
        }
    } 

   // App.js 

   class App {
    constructor() {
      this.comments = new Comments() 
    }
  }

  // index.js 

  const app = new App()



