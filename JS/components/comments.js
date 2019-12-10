class Comments {
  
  constructor() {
    this.comments = []
    this.adapter = new CommentsAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadComments() 
  }

  initBindingsAndEventListeners() { 
    this.commentsContainer = document.getElementById('comments-container') 
    this.body = document.querySelector('body')   
    this.newCommentBody = document.getElementById('new-comment-body')
    this.commentForm = document.getElementById('new-comment-form') 
    this.commentForm.addEventListener('submit', this.createComment.bind(this))
  }


  createComment(e) {
    e.preventDefault()
    const value = this.newCommentBody.value 
   
    this.adapter.createComment(value).then(comment => {
      this.comments.push(new Comment(comment)) 
      this.resetField()
      this.render()
    })
  }


  fetchAndLoadComments() {
    this.adapter
      .getComments()
      .then(comments => {
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
    this.commentsContainer.innerHTML = this.comments.map(comment => comment.renderLi()).join('') 
    }
} 



