class Comment {
  constructor(commentJSON) {
    this.photo_id = commentJSON.photo_id
    this.body = commentJSON.body
  }

  renderLi() {
    console.log("new comment")
   // return `<li data-id=${this.photo_id}>${this.body}<li>` 
  }
}


