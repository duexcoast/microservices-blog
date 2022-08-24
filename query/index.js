const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

const posts = {};

const handleEvent = (type, data) => {
  if (type === 'PostCreated') {
    const { id, title, slug } = data;
    posts[id] = { id, title, slug, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }
};

// example schema for post object
// posts === {
//   'j123j34: {
//   id: 'j123j34',
//   title: 'post title'
//   comments: [
//     { id: 'klj3kl', content: 'comment!' },
//     { id: 'f32d4b', content: 'you SUCK!' },
//   ]
//   },
//   'j123j34: {
//   id: 'j123j34',
//   title: 'post title'
//   comments: [
//     { id: 'klj3kl', content: 'comment!' },
//     { id: 'f32d4b', content: 'you SUCK!' },
//   ]
//   },
// }

app.use(express.json());
app.use(cors());

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  handleEvent(type, data);

  res.send({});
});

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.listen(4002, async () => {
  console.log(`
  Successful 🔥
  QUERY SERVICE
  Listening on http://localhost:4002
  `);
  try {
    const { data } = await axios.get('http://localhost:4005/events');

    for (let event of data) {
      console.log('Processing event:', event.type);
      handleEvent(event.type, event.data);
    }
  } catch (err) {
    console.error(err);
  }
});
