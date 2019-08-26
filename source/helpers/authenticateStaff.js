// Instruments
import { NotFoundError } from './';
import { Staff } from '../models';

export const authenticateStaff = (req, res, next) => {
    if (!req.session.user) {
        return next(new NotFoundError('cookie not found', 401));
    }

    const { hash } = req.session.user;
    const staffModel = new Staff({ hash });

    if (hash && staffModel.getByHash()) {
        next();
    } else {
        res.status(401).json({ message: 'authentication credentials are not valid' });
    }
};
