import { rest } from 'msw';

import books from './data/books';

export const book = [
  rest.get('https://my.backend/book', (req, res, ctx) => {
    return res(ctx.json(books[0]));
  }),
];
