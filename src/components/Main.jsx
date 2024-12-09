/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const Main = (props) => {
  return (
    <main style={{ display: 'flex', padding: '10px' }}>
      <Sidebar />
      <Content posts={props.posts} />
    </main>
  );
};

export default Main;
