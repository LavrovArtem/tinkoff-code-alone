window.advent3 = {};

window.advent3.fn3 = ({ height, slices }) => {
    slices = slices.sort((a, b) => b - a);

    let sum = 0;

    for (let i = 0; i < slices.length; i++) {
        sum += slices[i];

        if (sum >= height)
            return i;
    }

    return NaN;
};
    
window.advent3.fn3Wrong2 = ({ height, slices }) => {
    let start = 0;
    let min = slices.length - 1;
    let sum = 0;

    for (let i = 0; i < slices.length; i++) {
        sum += slices[i];

        if (sum >= height) {
            while (sum - slices[start] >= height) {
                sum -= slices[start];
                ++start;
            }

            min = Math.min(min, i - start);
        }
    }

    return min;
};
    
window.advent3.fn3Wrong3 = ({ height, slices }) => {
    let begin = 0;
    let end = slices.length - 1;
    let sum = 0;

    while (sum < height)
        sum += slices[begin++];
    
    sum = 0;

    while (sum < height)
        sum += slices[end--];

    return Math.min(begin - 1, slices.length - end - 2);
};
