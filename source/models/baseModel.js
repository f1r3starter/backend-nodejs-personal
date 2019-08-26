// Instruments
import { validatePaginationObj, NotFoundError } from '../helpers';

export class BaseModel {
    constructor(data) {
        this.data = data;
        this.model = {};
    }

    async create() {
        const data = await this.model.create(this.data);

        return data;
    }

    async getAll() {
        const { page: oPage, size: oSize } = this.data;
        const excludeFields = this.excludeFields();

        const { page, size } = validatePaginationObj({
            page: oPage,
            size: oSize,
        });
        const total = await this.model.countDocuments();
        const offset = (page - 1) * size;

        const data = await this.model
            .find({})
            .sort('-created')
            .skip(offset)
            .limit(size)
            .select(excludeFields)
            .lean();

        return {
            data,
            meta: {
                total,
                page,
                size,
            },
        };
    }

    async getByHash() {
        const { hash } = this.data;
        const excludeFields = this.excludeFields();

        const data = await this.model
            .findOne({ hash })
            .select(excludeFields)
            .lean();

        if (!data) {
            throw new NotFoundError(`can not find document with hash ${hash}`);
        }

        return data;
    }

    async updateByHash() {
        const { hash, payload } = this.data;
        const excludeFields = this.excludeFields();

        const data = await this.model
            .findOneAndUpdate({ hash }, payload)
            .select(excludeFields)
            .lean();

        if (!data) {
            throw new NotFoundError(`can not find document with hash ${hash}`);
        }

        return data;
    }

    async removeByHash() {
        const { hash } = this.data;

        const data = await this.model.findOneAndDelete({ hash });

        if (!data) {
            throw new NotFoundError(`can not find document with hash ${hash}`);
        }

        return data;
    }

    excludeFields() {
        return '-__v -_id -__t -created -modified';
    }
}
