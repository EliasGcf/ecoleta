import express from 'express';

const app = express();

app.listen(3333, () => {
  // eslint-disable-next-line
  console.log('🚀  Server started on port 3333!');
});