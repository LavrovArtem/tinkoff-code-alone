window.advent4 = {};

window.advent4.fn4Slow = sequence => {
    const uniqueSequences = [0];
    const correctIndex = index => index < sequence.length ? index : index - sequence.length;
    const isEqual = (index1, index2) => {
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[correctIndex(i + index1)] !== sequence[correctIndex(i + index2)])
                return false;
        }

        return true;
    }

    for (let i = 1; i < sequence.length; i++) {
        if (uniqueSequences.every(index => !isEqual(index, i)))
            uniqueSequences.push(i);
    }

    return uniqueSequences.length;
};
    
window.advent4.fn4 = sequence => {
    const correctIndex = index => index < sequence.length ? index : index - sequence.length;
    const isEqual = index => {
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] !== sequence[correctIndex(i + index)])
                return false;
        }

        return true;
    }

    for (let i = 1; i < sequence.length; i++) {
        if (isEqual(i))
            return i;
    }

    return sequence.length;
};
