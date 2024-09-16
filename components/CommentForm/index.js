import styled from "styled-components";

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
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #333;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }

  &:active {
    background-color: #111;
  }
`;
