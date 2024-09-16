import styled from "styled-components";

export default function Comments({ comments }) {
  if (!comments) return <ErrorText>Error</ErrorText>;

  return (
    <>
      <CommentsTitle>Comments</CommentsTitle>
      {comments.length > 0 ? (
        <CommentsList>
          {comments.map((comment, index) => (
            <CommentItem key={index}>
              <p>{comment.text}</p>
              <CommentDate>{comment.date}</CommentDate>
            </CommentItem>
          ))}
        </CommentsList>
      ) : (
        <NoComments>No comments yet</NoComments>
      )}
    </>
  );
}

const CommentsTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CommentsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CommentItem = styled.li`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CommentDate = styled.p`
  font-size: 12px;
  color: #888;
  margin-top: 5px;
`;

const NoComments = styled.p`
  color: #666;
  font-style: italic;
`;

const ErrorText = styled.h2`
  color: red;
`;
