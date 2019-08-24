// Core
import mongoose from 'mongoose';
import v4 from 'uuid/v4';

const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
            default:  () => v4(),
        },
        title: {
            type:     String,
            required: true,
        },
        description: {
            type:     String,
            required: true,
        },
        price: {
            type:     Number,
            required: true,
            validate: {
                validator: function(v) {
                    return v >= 0;
                },
                message: 'Price cannot be less than a zero',
            },
        },
        discount: {
            type:     Number,
            validate: {
                validator: function(v) {
                    return v >= 0 && v <= 50;
                },
                message: 'Discount should be in a range between 0 and 50 percents',
            },
        },
        total:    {
            type:     Number,
            required: true,
        },
    },
    { timestamp: { createdAt: 'created', updatedAt: 'modified' } },
);

schema.index({ hash: 1 }, { name: 'hash' });

export const products = mongoose.model('classes', schema);

products.createIndexes();
