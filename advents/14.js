window.advent14 = {};

window.advent14.fn14 = ({ size, restrictions }) => {
    const allowed = new Array(size).fill('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    restrictions.forEach(([index, symbol]) => allowed[index - 1] = allowed[index - 1].replace(symbol, ''));

    return allowed.reduce((code, sequence) => code + sequence[Math.floor((sequence.length - 1) / 2)], '');
};

window.advent14.fn14Wrong = ({ size, restrictions }) => {
    const allowed = new Array(size).fill('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    restrictions.forEach(([index, symbol]) => allowed[index - 1] = allowed[index - 1].replace(symbol, ''));

    return allowed.reduce((code, sequence) => code + sequence[Math.floor(sequence.length / 2)], '');
};
