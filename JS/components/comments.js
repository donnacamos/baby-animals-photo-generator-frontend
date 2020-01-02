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
    this.photoWithComments.sort((a, b) => (a.body < b.body) ? 1 : -1) 
    console.log("comments"); 
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
    // this.commentsContainer.innerHTML = this.comments.map(comment => comment.renderLi())  
  } 
}



