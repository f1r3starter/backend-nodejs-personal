// Instruments
import { NotFoundError } from './';

export const checkSelfEdit = (req, res, next) => {
    if (!req.session.user) {
        return next(new NotFoundError('cookie not found', 401));
    }

    const { customerHash } = req.params;
    const { hash } = req.session.user;

    if (customerHash === hash) {
        next();
    } else {
        res.status(401).json({ message: 'you can edit only your profile' });
    }
};
