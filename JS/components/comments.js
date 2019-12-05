// fetch the data from db 
// create an allComments array 
// create a class Comment 
// render the comment from the database 

class CommentsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3001/api/v1/comments'
    }

    getComments() {
        return fetch(this.baseUrl)
          .then(res => res.json()) 
    }

    createComment(value) {
        const comment = {
            body: value,
        }

        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ comment }), 
        }).then(res => res.json())
    }

    updateComment(value, id) {
        const comment = {
            body: value,
        }

        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ comment }),
          }).then(res => res.json())
    }
}

class Comment {
    constructor(commentJSON) {
        this.id = commentJSON.id
        this.body = commentJSON.body
    }

    renderLi() {
        return `<li data-id=${this.id}>${this.body}</li>`
    }
}



class Comments {
    constructor() {
      this.comments = []
      this.adapter = new CommentsAdapter()
      this.initiBindingsAndEventListeners()
      this.fetchAndLoadComments()
    }
    
  
    initiBindingsAndEventListeners() {
      this.commentsContainer = document.getElementById('comments-container')
      this.body = document.querySelector('body')
      this.newCommentBody = document.getElementById('new-comment-body')
      this.commentForm = document.getElementById('new-comment-form') 
      this.commentForm.addEventListener('submit', this.createComment.bind(this))
      this.commentsContainer.addEventListener('dblclick', this.handleCommentClick.bind(this))
      this.body.addEventListener('blur', this.updateComment.bind(this), true)
    
    }
  
    createComment(e) {
      e.preventDefault()
      const value = this.newCommentBody.value
  
      this.adapter.createComment(value).then(comment => {
        this.comments.push(new Comment(comment))
        this.newCommentBody.value = ''
        this.render()
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
  
    updateComment(e) {
      const li = e.target
      li.contentEditable = false
      li.classList.remove('editable')
      const newValue = li.innerHTML
      const id = li.dataset.id
      //console.log(id)
      this.adapter.updateComment(newValue, id)
    }
  
    fetchAndLoadComments() {
      this.adapter
        .getComments()
        .then(comments => {
          comments.sort((a, b) => a.id - b.id).forEach(comment => this.comments.push(new Comment(comment)))
        })
        .then(() => {
          this.render()
        })
    }
  
    render() {
      this.commentsContainer.innerHTML = this.comments.map(comment => comment.renderLi()).join('')
    }
  }

  class App {
    constructor() {
        this.comments = new Comments()
    }
}

const app = new App() 



