window.addEventListener('load', () => {
    function selectAdvent (index) {
        iframePdf.src = `description/advent_${index}.sample.pdf`;
        localStorage.setItem('advent', index);
    }


    const iframePdf = document.querySelector('[name="pdf"]');
    const anchors = document.querySelectorAll('a');
    const currentAdvent = parseInt(localStorage.getItem('advent'));


    if (!isNaN(currentAdvent))
        selectAdvent(currentAdvent);

    for (const a of anchors) {
        a.addEventListener('click', e => {
            const index = parseInt(/#n(\d+)$/.exec(e.target.href)[1]);

            selectAdvent(index);
        });
    }
});
