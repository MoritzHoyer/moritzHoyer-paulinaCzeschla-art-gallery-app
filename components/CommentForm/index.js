export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.elements.comment.value;

    if (comment.trim()) {
      onSubmitComment(comment);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Add Comment</label>
      <input id="comment" type="text" name="comment" />
      <button type="submit">Send</button>
    </form>
  );
}
