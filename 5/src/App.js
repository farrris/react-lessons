import 'bulma/css/bulma.css';
import './App.css';
import PostList from "./components/PostList.js"


function App() {
  return (
    <div className="is-light">
      <h2 className="title has-text-centered dividing-header">Голосуй за лучший пост!</h2>
      <PostList/>
    </div>
  );
}

export default App;
