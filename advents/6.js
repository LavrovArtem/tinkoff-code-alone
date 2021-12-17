window.advent6 = {};

window.advent6.fn6Wrong = commands => {
    const regexps = [/L([LUD]*?)R/g, /R([RUD]*?)L/g, /U([URL]*?)D/g, /D([DRL]*?)U/g];

    let prevCommands;

    do {
        prevCommands = commands;
        
        for (const re of regexps)
            commands = commands.replace(re, '$1');
    }
    while (commands !== prevCommands);

    return commands;
};
    
window.advent6.fn6 = commands => {
    const cmdCounters = { left: 0, right: 0, up: 0, down: 0 };
    
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'U')
            ++cmdCounters.up;
        else if (commands[i] === 'D')
            ++cmdCounters.down;
        else if (commands[i] === 'L')
            ++cmdCounters.left;
        else
            ++cmdCounters.right;
    }
    
    let result;

    if (cmdCounters.left - cmdCounters.right > 0)
        result = ''.padStart(cmdCounters.left - cmdCounters.right, 'L');
    else
        result = ''.padStart(cmdCounters.right - cmdCounters.left, 'R');
    
    if (cmdCounters.up - cmdCounters.down > 0)
        result = result.padEnd(result.length + cmdCounters.up - cmdCounters.down, 'U');
    else
        result = result.padStart(result.length + cmdCounters.down - cmdCounters.up, 'D');
    
    return result;
};
