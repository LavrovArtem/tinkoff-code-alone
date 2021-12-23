window.advent13 = {};

window.advent13.fn13 = ({ pointer, numbers }) => {
    const sorted = numbers
        .map((number, index) => ({ sortNum: number.replace(/\D/g, '').substr(-10), index }))
        .sort((a, b) => a.sortNum > b.sortNum ? 1 : a.sortNum < b.sortNum ? -1 : 0);

    return numbers[sorted[pointer - 1].index];
};
