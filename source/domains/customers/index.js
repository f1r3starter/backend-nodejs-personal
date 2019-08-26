// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, updateByHash, removeByHash } from './hash';
import { limiter, validator, authenticate, authenticateStaff, checkSelfEdit } from '../../helpers';

// Schema
import { createCustomer } from '../../schemas';

export const router = express.Router();

router.get('/', [ authenticateStaff, limiter(5, 60 * 1000) ], get);
router.post('/', [ validator(createCustomer) ], post);

router.get('/:customerHash', [ authenticate, checkSelfEdit ], getByHash);
router.put('/:customerHash', [ authenticate, checkSelfEdit ], updateByHash);
router.delete('/:customerHash', [ authenticate, checkSelfEdit ], removeByHash);

export { router as customers };
