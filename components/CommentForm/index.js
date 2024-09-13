export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.elements.comment.value;

    if (comment.trim()) {
      onSubmitComment(comment);
      event.target.reset();
      event.target.elements.comment.focus();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Add Comment</label>
      <input
        id="comment"
        type="text"
        name="comment"
        placeholder=" Type here ..."
      />
      <button type="submit">Send</button>
    </form>
  );
}
