window.advent5 = {};

window.advent5.fn5 = ({ pointer, variants }) => {
    let combinations = variants.reduce((a, b) => a * b.length, 1);

    return variants.reduce((code, numbers) => {
        combinations /= numbers.length;

        const index = Math.ceil(pointer / combinations) - 1;

        pointer -= index * combinations;

        return code + numbers[index];
    }, '');
};
