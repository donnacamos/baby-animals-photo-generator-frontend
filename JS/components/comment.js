class Comment { 
    constructor(commentJSON) {
      this.id = commentJSON.id
      this.body = commentJSON.body
      
    }

    renderCard() {
      return `<p>${this.body}</p>`
    }
}


