export const validatePaginationObj = ({ page: oPage, size: oSize }) => {
    let page = 1;
    let size = 25;
    const vPage = parseInt(oPage, 10);
    const vSize = parseInt(oSize, 10);

    if (oPage && vPage <= 0) {
        throw new Error('page can not be less or equal 0');
    } else if (oPage) {
        page = vPage;
    }

    if (oSize && vSize <= 0) {
        throw new Error('size can not be less or equal 0');
    } else if (oSize) {
        if (vSize > 100) {
            throw new Error('page size can not be grater than 100');
        } else {
            size = vSize;
        }
    }

    return {
        page,
        size,
    };
};
