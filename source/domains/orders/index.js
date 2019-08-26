// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, updateByHash, removeByHash } from './hash';
import { authenticate, validator } from '../../helpers';
import { createOrder } from '../../schemas';

export const router = express.Router();

router.get('/', get);
router.post('/', [ validator(createOrder), authenticate ], post);

router.get('/:orderHash', [ authenticate ], getByHash);
router.put('/:orderHash', [ authenticate ], updateByHash);
router.delete('/:orderHash', [ authenticate ], removeByHash);

export { router as orders };
