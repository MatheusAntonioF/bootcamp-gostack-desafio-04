/* eslint-disable */
import React from "react";

function Comment({ author, content }) {
  return (
    <>
      <p id="comment">
        <strong>{author}</strong> {content}
      </p>
    </>
  );
}

export default Comment;
