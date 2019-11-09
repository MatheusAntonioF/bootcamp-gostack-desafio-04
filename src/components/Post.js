import React from "react";

import Comments from "./Comments";

function Post({ author, date, content, comments }) {

  return (
    <div id="post">
      <h3>{author}</h3>
      <small>{date}</small>
      <p id="contentPost">{content}</p>
      {comments.map(comment => (
        <Comments
          key={comment.id}
          author={comment.author.name}
          content={comment.content}
        />
      ))}
    </div>
  );
}

export default Post;
