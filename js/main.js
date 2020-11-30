{
    function setupCrossword() {

        const crosswordContainer = document.getElementById('crossword');
        const crosswordData = SAMPLE_DATA[0];

        const crossword = new Crossword(crosswordContainer, crosswordData);
    }

    document.addEventListener('DOMContentLoaded', () => {
        setupCrossword();
    });
}

