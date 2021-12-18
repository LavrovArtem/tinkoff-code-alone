window.advent8 = {};

window.advent8.fn8 = sequence => {
    const alphabet = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
    const pointer = { button: -1, char: -1 };
    const pointerToCode = () => {
        const btnSize = alphabet[pointer.button].length;
        const firstChar = pointer.char % btnSize;
        const additional = Math.floor(pointer.char / btnSize);

        return alphabet[pointer.button][firstChar].padEnd(additional + 1, alphabet[pointer.button][btnSize - 1]);
    }
    let result = '';

    for (const btmNumber of sequence) {
        const button = parseInt(btmNumber) - 2;

        if (button !== pointer.button) {
            if (pointer.button !== -1)
                result += pointerToCode();

            pointer.button = button;
            pointer.char = 0;
        } else
            ++pointer.char;
    }
    
    result += pointerToCode();

    return result;
};
