class Comment { 
    constructor(commentJSON) {
      this.id = commentJSON.id
      this.body = commentJSON.body
      
    }

    renderLi() {
      return `<li data-id=${this.id}>${this.body}</li>` 
    }


}


