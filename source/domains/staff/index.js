// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { limiter, validator, authenticateStaff } from '../../helpers';

// Schema
import { createStaff } from '../../schemas';

export const router = express.Router();

router.get('/', [ authenticateStaff, limiter(5, 60 * 1000) ], get);
router.post('/', [ validator(createStaff) ], post);

export { router as staff };
