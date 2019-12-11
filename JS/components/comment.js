class Comment {
  constructor(commentJSON) {
    this.photo_id = commentJSON.photo_id
    this.body = commentJSON.body
  }

  renderLi() {
  //  return `<li data-id=${this.id}>${this.body}<li>` 
  }
}


