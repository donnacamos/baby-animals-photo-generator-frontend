
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
    this.commentsContainer.addEventListener('dblclick', this.handleCommentClick.bind(this))
  }

  createComment(e) {
    e.preventDefault()
    const value = this.newCommentBody.value
    const photoId = this.commentsContainer.dataset.id 
    
    this.adapter.createComment(value, photoId).then(comment => {
      if(comment.error) {
        alert(comment.error)  
      } else {
      
      this.comments.push(new Comment(comment))
      this.newCommentBody.value = ''
      this.commentsContainer.dataset.id = '' 
      this.render()
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
        this.render()
      })
  }

  render() {
    this.commentsContainer.innerHTML = this.comments.map(comment => comment.renderData()).join('')  
  } 
}



