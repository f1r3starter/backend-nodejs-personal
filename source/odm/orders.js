// Core
import mongoose from 'mongoose';

// Refs
import { customers } from './';
import { products } from './';

const schema = new mongoose.Schema(
    {
        uid: {
            type:     mongoose.SchemaTypes.ObjectId,
            ref:      customers,
            required: true,
        },
        pid: {
            type:     mongoose.SchemaTypes.ObjectId,
            ref:      products,
            required: true,
        },
        count: {
            type:     Number,
            required: true,
        },
        comment: String,
    },
    { timestamp: { createdAt: 'created', updatedAt: 'modified' } },
);

schema.index({ hash: 1 }, { name: 'hash' });

export const orders = mongoose.model('orders', schema);

orders.createIndexes();
