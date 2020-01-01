class Comment {
  constructor(commentJSON) {
    this.photo_id = commentJSON.photo_id
    this.body = commentJSON.body
  }

  renderLi() {
    console.log("new comment") 
    return `<li data-id=${this.photo_id}>${this.body}<li>` 
   // figure out how to only show the comments with the photo they belong to. 
   // I tried using the comments div but it didn't load the comment until after the page refresh.
   // I'm not sure what to do. I think it has something to do with the id.
   // It looks like there are two ids: id and photo_id. They aren't the same and I'm not sure which is which.  
  }
}


