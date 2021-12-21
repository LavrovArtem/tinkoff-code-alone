window.advent11 = {};

window.advent11.fn11 = sequence => {
    let result = 0;
    let counter = 0;

    while (counter !== sequence.length) {
        main: for (let i = 0; i < sequence.length; i++) {
            const children = sequence[i];

            if (!children)
                continue;
            else if (children.length) {
                for (const child of children) {
                    if (sequence[child - 1] !== null)
                        continue main;
                }
            }

            result += ++counter * (i + 1);

            sequence[i] = null;
            break;
        }
    }

    return result;
};
