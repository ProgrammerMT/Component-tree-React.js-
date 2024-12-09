/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PostList from './PostList';

const Content = (props) => {
  return (
    <section style={{ flex: 1, padding: '10px' }}>
      <PostList posts={props.posts} />
    </section>
  );
};

export default Content;
