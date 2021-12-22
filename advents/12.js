window.advent12 = {};

window.advent12.fn12 = ({ size, maxDiff, sequence }) => {
    let result = 0;

    for (let i = 0; i < sequence.length - 1; i++) {
        const a = sequence[i];
        let j = i + 1;
        let b = sequence[j];

        while ((a * b + '').length === size && b - a <= maxDiff) {
            result = Math.max(result, a * b);
            j += 1;
            b = sequence[j]
        }
    }

    return result;
};
