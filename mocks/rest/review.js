import { rest } from 'msw';

import reviews from './data/reviews';

export const review = [
  rest.get('/reviews', (req, res, ctx) => {
    return res(ctx.json(reviews));
  }),
];
