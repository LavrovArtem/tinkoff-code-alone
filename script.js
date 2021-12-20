window.addEventListener('load', () => {
    function selectAdvent (index) {
        iframePdf.src = `description/advent_${index}.sample.pdf`;
        iframeResult.src = 'result.html#n' + index;
        localStorage.setItem('advent', index);
    }


    const iframePdf = document.querySelector('[name="pdf"]');
    const iframeResult = document.querySelector('[name="result"]');
    const anchors = document.querySelectorAll('a');
    let currentAdvent = parseInt(localStorage.getItem('advent'));


    if (!isNaN(currentAdvent))
        selectAdvent(currentAdvent);

    for (const a of anchors) {
        a.addEventListener('click', e => {
            const index = parseInt(/#n(\d+)$/.exec(e.target.href)[1]);

            if (currentAdvent === index)
                return;

            currentAdvent = index;
            selectAdvent(index);
        });
    }

    window.addEventListener('message', ({ data: sum }) => {
        if (!sum.full)
            return;

        const score = document.querySelector('#score');

        score.textContent = `Набрано ${sum.curr} очков из ${sum.full}.`;
    });
});
