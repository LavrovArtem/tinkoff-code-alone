window.advent7 = {};

window.advent7.fn7 = jars => jars.reduce((sum, jar, index) => jar.length ? sum : sum + index + 1, 0);
