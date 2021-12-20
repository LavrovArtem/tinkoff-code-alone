window.advent10 = {};

window.advent10.fn10 = sequence => {
    const squares = new Map();
    let maxSquare = 0;
    const setSquare = (height, square) => {
        maxSquare = Math.max(maxSquare, square);
        squares.set(height, square);
    };
    
    for (const currHeight of sequence) {
        for (const [height, square] of squares) {
            if (height > currHeight) {
                squares.delete(height);
                
                if (!squares.has(currHeight))
                    setSquare(currHeight, square / height * currHeight);
            }
            else
                setSquare(height, square + height);
        }

        if (!squares.has(currHeight))
            setSquare(currHeight, currHeight);
    }

    return maxSquare;
};
