window.advent16 = {};

window.advent16.fn16 = roadMap => {
    const roadMapRows = roadMap.split('\n').map(row => row.split(''));
    const width = roadMapRows[0].length + 1;
    const startIndex = roadMap.indexOf('A');
    const startPos = { x: startIndex % width, y: Math.floor(startIndex / width) };
    let pointers = [{ pos: startPos, length: 0 }];
    let nearest = void 0;
    const stepTo = ({ pos: { x, y }, length }, difX, difY) => {
        x += difX;
        y += difY;
        length += 1;
        
        const tile = roadMapRows[y]?.[x];

        if (tile === '.') {
            roadMapRows[y][x] = '#';
            return { pos: { x, y }, length };
        }

        return tile === 'B' ? length : null;
    };

    roadMapRows[startPos.y][startPos.x] = '#';

    while (!nearest) {
        const oldPointers = pointers;

        pointers = [];

        for (const pointer of oldPointers) {
            const newPointers = [stepTo(pointer, 0, -1), stepTo(pointer, 0, 1), stepTo(pointer, -1, 0), stepTo(pointer, 1, 0)]
                .filter(p => p);

            pointers = pointers.concat(newPointers);
        }

        nearest = pointers.find(p => typeof p === 'number');
    }

    return nearest;
};
