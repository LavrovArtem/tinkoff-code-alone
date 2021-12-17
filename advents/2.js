window.advent2 = {};

window.advent2.fn2 = ({ length, point }) => {
    const time1 = point * 2;
    const time2 = (length - point) * 2;

    let step = { left: time1, right: time2 };

    while (step.left !== step.right) {
        if (step.left < step.right)
            step.left += time1;
        else
            step.right += time2;
    }

    return step.left;
};
