import PostCreate from './features/newPost/PostCreate';
import Posts from './features/postList/Posts';

function App() {
  return (
    <div className="m-6 flex flex-col  gap-8">
      <h1 className="text-3xl font-bold">Create Post</h1>
      <div className="w-96">
        <PostCreate className />
      </div>
      <Posts />
    </div>
  );
}

export default App;
