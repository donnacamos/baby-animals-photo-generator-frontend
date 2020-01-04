// created a class function, everything in this file is a result of this function 
class Comments {
  constructor() {
    // the array holds all the comments
    this.comments = []
    // this creates a new CommentsAdapter() 
    this.adapter = new CommentsAdapter()
    // calling the function to "grab" all the events 
    this.initBindingsAndEventListeners()
    // fetching the comments from the db and rendering them onto the browser 
    this.fetchAndLoadComments()
  }

  initBindingsAndEventListeners() {
    this.commentsContainer = document.getElementById('comments-container')  
    this.body = document.querySelector('body') 
    this.newCommentBody = document.getElementById('new-comment-body')
    this.commentForm = document.getElementById('new-comment-form')
    this.commentForm.addEventListener('submit', this.createComment.bind(this))  
    this.commentsContainer.addEventListener('dblclick', this.handleCommentClick.bind(this))
    this.sortButton = document.getElementById('sort-button') 
    this.sortButton.addEventListener('click', this.sortComments.bind(this))   
  }

   

  sortComments() { 
    fetch('http://localhost:3001/api/v1/comments')
    .then(res => res.json()) 
    .then(comments => {
      comments.sort(function(a, b) {
        let bodyA = a.body.toUpperCase(); // ignore upper and lowercase
        let bodyB = b.body.toUpperCase(); // ignore upper and lowercase
        if (bodyA < bodyB) {
          return -1;
        }
        if (bodyA > bodyB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
     // document.getElementById("comments-container") 
     // let ul = document.createElement("ul") 
      comments.forEach(comment => {
        // this ul needs to attach all the comment's body attributes to an "li" and append them to the DOM 
        let li = document.createElement("li") 
        document.getElementById("new-comment-body")
        let body = this.newCommentBody.value
        li.innerText = comment.body   
        document.getElementById("comments-container").appendChild(li)

      })
    })  
  }


  createComment(e) {
    e.preventDefault()
    const value = this.newCommentBody.value   
    const photoId = document.getElementById('comments').dataset.id       
   
    this.adapter.createComment(value, photoId).then(comment => {
      if(comment.error) {
        alert(comment.error)  
      } else {
      
      this.comments.push(new Comment(comment))
      this.newCommentBody.value = ''  
      this.render(photoId)
      }
    })
  }

  handleCommentClick(e) {
    this.toggleComment(e)
  }

  toggleComment(e) {
    const li = e.target
    li.contentEditable = true
    li.focus()
    li.classList.add('editable')
  }


  fetchAndLoadComments() {
    this.adapter
      .getComments()
      .then(comments => {
        comments.forEach(comment => this.comments.push(new Comment(comment)))
      })
      .then(() => { 
        const photoId = document.getElementById('comments').dataset.id  
        this.render(photoId) 
      })
  }

  render(photoId) {
    const photoComments = this.comments.filter(comment => comment.photo_id === parseInt(photoId))
    document.getElementById('comments').innerHTML = photoComments.map(comment => comment.renderLi()) 
  } 
}



