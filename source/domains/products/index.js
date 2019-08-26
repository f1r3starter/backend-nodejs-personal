// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, updateByHash, removeByHash } from './hash';
import { authenticate, authenticateStaff, validator } from '../../helpers';
import { createProduct } from '../../schemas';

export const router = express.Router();

router.get('/', get);
router.post('/', [ validator(createProduct), authenticateStaff ], post);

router.get('/:productHash', [ authenticate ], getByHash);
router.put('/:productHash', [ authenticateStaff ], updateByHash);
router.delete('/:productHash', [ authenticateStaff ], removeByHash);

export { router as products };
