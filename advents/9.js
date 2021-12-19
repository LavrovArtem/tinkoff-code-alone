window.advent9 = {};

window.advent9.fn9ExtraSlow = sequence => {
    let currChains = [];

    for (let i = 0; i < sequence.length; i++) {
        if (i + 1 !== sequence[i])
            currChains.push([i + 1, sequence[i]]);
    }

    let currLength = 2;

    while (currChains.length) {
        let newChain = [];
        
        for (const chain of currChains) {
            const next = sequence[chain[currLength - 1] - 1];

            if (chain.indexOf(next) === -1) {
                chain.push(next);
                newChain.push(chain);
            }
        }
    
        ++currLength;
        currChains = newChain;
    }
        
    return currLength - 1;
};

window.advent9.fn9 = sequence => {
    const chains = sequence.map((_, i) => [i + 1]);
    const circles = [];
    let maxLength = 1;
    const reduceFn = (sum, circle) => {
        maxLength = Math.max(maxLength, circle.length)
        
        return sum + circle.length;
    };

    while (circles.reduce(reduceFn, 0) !== sequence.length) {
        for (let i = 0; i < chains.length; i++) {
            const chain = chains[i];

            if (!chain)
                continue;

            const last = chain[chain.length - 1];
            const next = sequence[last - 1];

            if (chain[0] === next) {
                circles.push(chain);
                chains[i] = void 0;
                continue;
            }

            chains[i] = chain.concat(chains[next - 1]);
            chains[next - 1] = void 0;
        }
    }

    return maxLength;
};
