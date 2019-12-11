class CommentsAdapter {
    constructor() {
      this.baseUrl =
      'http://localhost:3001/api/v1/comments'
     
    }
  
    getComments() {
      return fetch(this.baseUrl).then(res => res.json()
  
      
      )
    }
  
  
    createComment(body, photoId) {
      const commentData = {
        body: body, 
        photo_id: photoId 
      }
      console.log("commentData", commentData ) 
  
      return fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(commentData)
      }).then(res => res.json())
    }

}