// Core
import mongoose from 'mongoose';

// Base
import { users } from './base';

const schema = users.discriminator('customers', new mongoose.Schema({
    city:    String,
    country: String,
}));

schema.index({ city: 'text', country: 'text' });

export const customers = mongoose.model('customers', schema);

customers.createIndex();
