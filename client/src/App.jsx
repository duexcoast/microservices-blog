import PostCreate from './features/newPost/PostCreate';
import PostList from './features/PostList/PostList';

function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Create Post</h1>
      <PostCreate />
      <PostList />
    </div>
  );
}

export default App;
