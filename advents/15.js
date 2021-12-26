window.advent15 = {};

window.advent15.fn15 = points => {
    const medianIndex = Math.floor((points.length - 1) / 2);

    const x = points.map(p => p.x).sort((a, b) => a - b)[medianIndex];
    const y = points.map(p => p.y).sort((a, b) => a - b)[medianIndex];

    return x + y;
};

window.advent15.fn15Wrong1 = points => {
    const sumPoint = points.reduce((sum, point) => ({ x: sum.x + point.x, y: sum.y + point.y }), { x: 0, y: 0 });
    const middlePoint = { x: sumPoint.x / points.length, y: sumPoint.y / points.length };

    const minDistanceAndIndex = points
        .map(point => ({ x: Math.abs(point.x - middlePoint.x), y: Math.abs(point.y - middlePoint.y) }))
        .reduce((r, point, index) => {
            const sum = point.x + point.y;

            if (r.distance > sum) {
                r.distance = sum;
                r.index = index;
            }

            return r;
        }, { index: -1, distance: Infinity });

    const nearestPoint = points[minDistanceAndIndex.index];

    return nearestPoint.x + nearestPoint.y;
};

window.advent15.fn15Wrong2 = points => {
    const sumsWithIndexes = points.map(p1 => points.reduce((sum, p2) => sum + Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y), 0))
        .map((s, i) => ({ s, i }))
        .sort((a, b) => a.s - b.s)
        .filter((e, i, arr) => e.s === arr[0].s);

    const nearestPoint = points[sumsWithIndexes[0].i];
    
    return nearestPoint.x + nearestPoint.y;
};
