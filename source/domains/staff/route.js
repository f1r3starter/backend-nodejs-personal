// Core
import dg from 'debug';

// Instruments
import { Staff } from '../../controllers';

const debug = dg('router:staff');

export const get = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        const { page, size } = req.query;
        const model = new Staff({ page, size });
        const data = await model.getAll();

        res.status(200).json({ ...data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        const model = new Staff(req.body);
        const data = await model.create();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
