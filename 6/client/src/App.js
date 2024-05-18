import 'bulma/css/bulma.css';
import './App.css';
import PostList from "./components/PostList"
import {useEffect } from 'react';
import usePostsContext from "./hooks/usePostsContext"


function App() {

  const {getPosts} = usePostsContext();

  useEffect(() => {
    getPosts();
  }, [getPosts])

  return (
    <div className="is-light">
      <h2 className="title has-text-centered dividing-header">Голосуй за лучший пост!</h2>
      <PostList/>
    </div>
  );
}

export default App;
