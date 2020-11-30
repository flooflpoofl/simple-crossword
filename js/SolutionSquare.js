class SolutionSquare extends Square {

    constructor(row, column, solutionSquareData, callbacks) {
        super(row, column);
        this.data = solutionSquareData;
        this.callbacks = callbacks;
        this.squareType = 'solution';

        this.currentSolution = '';
        this.horizontalSlot = undefined;
        this.verticalSlot = undefined;

        this.solutionElement = undefined;

        this.addSolutionSquare();
        this.addArrows();
        this.addInteraction();
    }

    addSolutionSquare() {

        const solution = document.createElement('div');
        solution.contentEditable = true;
        solution.classList.add('crossword__solution');

        this.squareElement.querySelector('.crossword__square-content').append(solution);

        this.solutionElement = solution;
    }

    addArrows() {

        this.data.arrows.forEach(arrow => {
            const arrowElement = document.createElement('i');
            arrowElement.classList.add('material-icons');

            if (arrow.type === 'turn') { arrowElement.innerHTML = 'subdirectory_arrow_right'; }
            if (arrow.type === 'straight') { arrowElement.innerHTML = 'south'; }

            const arrowClass = `arrow-${arrow.position}-${arrow.orientation}`;
            arrowElement.classList.add(arrowClass);

            this.squareElement.querySelector('.crossword__square-content').append(arrowElement);
        });
    }

    addInteraction() {
        this.squareElement.addEventListener('click', (e) => {
            this.callbacks.onSolutionSquareClick(this);
        });

        this.setupInputInteraction();
    }

    setupInputInteraction() {

        this.solutionElement.addEventListener('keypress', (e) => {

            if ((e.target.textContent.length > 0)) {
                e.target.textContent = '';
            }

        });

        this.solutionElement.addEventListener('keydown', (e) => {

            if ( e.key === 'Backspace' ) {
                e.target.textContent = '';
                this.currentSolution = '';
                this.callbacks.onSolutionSquareErase(this);
            }

            if ( e.key === 'Enter' ) {
                console.log('enter press');
                e.preventDefault();
            }

            if (e.key === 'Tab') {
                console.log('tab press');
                e.preventDefault();
            }

        });

        this.solutionElement.addEventListener('input', (e) => {

            const testRegex = /^[a-zA-ZäöåÄÖÅ]+$/;
            const replaceRegex = /[^a-zA-ZäöåÄÖÅ]+/;
            
            if ( !(testRegex.test(e.target.textContent)) ) {
                e.target.textContent = e.target.textContent.replace(replaceRegex, '');
            } else {
                this.currentSolution = e.target.textContent;
                this.callbacks.onSolutionSquareWrite(this);
            }

        });

        // this.solutionElement.addEventListener('focusout', (e) => {
        //     console.log('lost focus');
        // });

        // Preventing a bunch of events
        const eventsToPrevent = [
            'dragover', 'drop', 'cut', 'copy','paste'
        ];

        eventsToPrevent.forEach(eventToPrevent => {
            this.solutionElement.addEventListener(eventToPrevent, (e) => {
                e.preventDefault();
                console.log('prevented');
                return false;
            })
        });
    }

    getSlot(orientation) {

        if (
            this.horizontalSlot === undefined &&
            this.verticalSlot === undefined
        ) {
            return undefined;
        }

        if (orientation === 'horizontal') {

            return (this.horizontalSlot === undefined) ? this.verticalSlot : this.horizontalSlot;

        } else if (orientation === 'vertical') {

            return (this.verticalSlot === undefined) ? this.horizontalSlot : this.verticalSlot;
        }
    }

    squareHighlightOn() {
        this.slotHighlightOff();
        this.solutionElement.classList.add('active-square');
    }

    squareHighlightOff() {
        this.solutionElement.classList.remove('active-square');
    }

    slotHighlightOn() {
        this.solutionElement.classList.add('active-slot');
    }

    slotHighlightOff() {
        this.solutionElement.classList.remove('active-slot');
    }

    styleTextDefault() {
        this.solutionElement.style = this.solutionElement.style.getPropertyValue('--clr-fg-solution--default');
    }

    styleTextCorrect() {
        this.solutionElement.style = this.solutionElement.style.getPropertyValue('--clr-fg-solution--correct');
    }

    styleTextWrong() {
        this.solutionElement.style = this.solutionElement.style.getPropertyValue('--clr-fg-solution--wrong');
    }
}
