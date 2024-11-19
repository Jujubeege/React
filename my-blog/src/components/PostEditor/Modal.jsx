"./Modal.css"
function PostEditorModal(formData){
    console.log(formData.isPublished)
    if(formData.isPublished && formData.isReview){
    return(
        <div><p>Publish and Review, {formData.title} {formData.content}</p></div>
    )
}
    if(formData.isPublished){
      return(
        <div><p>successfully published, {formData.title} {formData.content}</p></div>
      )
     /* return (
     <div><p>PostEditorModal</p></div>
      )*/
}   if(formData.isReview){
    return (
        <div><p>Inside Review, {formData.title} {formData.content}</p></div>
    )
}
}
export default PostEditorModal;