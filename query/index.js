const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

const posts = {};

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

  res.send({});
});

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.listen(4002, () => {
  console.log(`
  Successful 🔥
  QUERY SERVICE
  Listening on http://localhost:4002
  `);
});
