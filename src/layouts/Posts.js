import React from 'react';
import {Link,Route} from 'react-router-dom';
import Post from './Post';

class Posts extends React.Component {
  render () {
      return(
      <div>
      <div>posts</div>
      <Link to={`post/:id`}>post 1</Link>
      <Route path={`post/${1}`} component={Post} />
  </div>
  );
  }
}

export default Posts
;
