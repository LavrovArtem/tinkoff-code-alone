window.advent17 = {};

window.advent17.fn17 = code => {
    const brackets = { '(': ')', '{': '}', '[': ']' };
    const stack = [];
    let fnCounts = 0;

    for (const letter of code) {
        if (brackets[letter])
            stack.push(letter);
        else if (letter === brackets[stack[stack.length - 1]])
            stack.pop();
        else
            throw new Error('Syntax error!');

        if (!stack.length && letter === '}')
            ++fnCounts;
    }

    return fnCounts;
};
