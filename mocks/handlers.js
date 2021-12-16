import { rest } from 'msw';

import { book } from './rest/book';
import { review } from './rest/review';

export const handlers = [...book, ...review];
