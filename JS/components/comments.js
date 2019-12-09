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
    debugger 
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
    // comment is not defined 
    // find out why 
    this.commentsContainer.innerHTML = this.comments.map(comment => 
      comment.Photo.prototype.render().join('') 
    )}
} 



