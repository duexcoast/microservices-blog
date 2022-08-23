import PostCreate from './features/newPost/PostCreate';
import Posts from './features/postList/Posts';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Create Post</h1>
      <PostCreate />
      <Posts />
    </div>
  );
}

export default App;
