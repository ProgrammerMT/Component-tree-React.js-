/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
  return (
    <div>
      {props.posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
git 
export default PostList;
