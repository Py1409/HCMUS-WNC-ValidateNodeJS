import express from 'express';
import morgan from 'morgan';

import filmRouter from './routes/film.route.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.json({
    msg: 'hello from expressjs'
  });
});

app.use('/api/films', filmRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`API is listening at http://localhost:${PORT}`);
});