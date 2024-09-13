export default function Comments({ comments }) {
  // console.log("COMMENTS: ", comments);
  // korrekt!

  if (!comments) return <h2>FEHLER</h2>;

  return (
    <>
      <h3>Comments</h3>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <p>{comment.text}</p>
              <p>{comment.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No comments</h3>
      )}
    </>
  );
}
