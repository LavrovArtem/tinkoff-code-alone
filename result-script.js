window.addEventListener('load', () => {
    const emptyDiv = document.getElementById('empty');
    const runnerDiv = document.getElementById('runner');
    const runnerContent = runnerDiv.querySelector('div');
    const runnerReload = runnerDiv.querySelector('button');
    let currentIndex;


    function getIdFromUrl (url) {
        return url.replace(/^.+?(#(n\d+))?$/, '$2');
    }

    function loadScript (url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');

            script.setAttribute('src', url);
            script.addEventListener('load', () => resolve(url));
            script.addEventListener('error', () => reject(url));

            runnerContent.appendChild(script);
        });
    }

    function createFnRunner (advent, fnName) {
        const p = document.createElement('p')
        const runButton = document.createElement('button');
        const codeButton = document.createElement('button');
        const pre = document.createElement('pre');

        runButton.textContent = 'Запустить ' + fnName;
        codeButton.textContent = 'Код ' + fnName;
        p.appendChild(runButton);
        p.appendChild(codeButton);
        p.appendChild(pre);
        runButton.addEventListener('click', () => pre.textContent = advent[fnName](advent.testData));
        codeButton.addEventListener('click', () => pre.textContent = advent[fnName]);

        runnerContent.appendChild(p);
    }

    function createRunner (index) {
        runnerContent.innerHTML = '';

        loadScript(`advents/${currentIndex}.js?t=${Date.now()}`)
            .then(() => loadScript(`js-test-data/advent_${currentIndex}.js`))
            .then(() => {
                const advent = window['advent' + currentIndex];
                const fns = Object.keys(advent).filter(name => name !== 'testData');

                for (const fnName of fns)
                    createFnRunner(advent, fnName);
            })
            .catch(e => {
                runnerContent.innerHTML = 'Что то пошло не так!!! ' + e;
            });        
    }

    window.addEventListener('hashchange', e => {
        const oldId = getIdFromUrl(e.oldURL);
        const newId = getIdFromUrl(e.newURL);

        if (!oldId) {
            emptyDiv.style.display = 'none';
            runnerDiv.style.display = 'block';
        } else
            document.getElementById(oldId).style.display = 'none';

        document.getElementById(newId).style.display = 'block';

        currentIndex = parseInt(newId.substr(1));

        createRunner();
    });

    runnerReload.addEventListener('click', createRunner);
});
