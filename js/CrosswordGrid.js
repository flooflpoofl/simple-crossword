class CrosswordGrid {

    constructor(data) {
        this.data = data;
        this.width = data.width;
        this.height = data.height;

        this.squareGrid = [];
        this.crosswordTable = undefined;
        

        this.horizontalSlots = undefined;
        this.verticalSlots = undefined;

        this.activeOrientation = 'horizontal';
        this.activeSolutionSquare = undefined;
        this.activeSlot = undefined;
        this.isShowingSolution = false;

        this.callbacks = {
            onSolutionSquareClick: (solutionSquare) => this.onSolutionSquareClick(solutionSquare),
            onSolutionSquareWrite: (solutionSquare) => this.onSolutionSquareWrite(solutionSquare),
            onSolutionSquareErase: (solutionSquare) => this.onSolutionSquareErase(solutionSquare),
        }


        this.createCrossword();
        this.solutionSquares = this.squareGrid.flat().filter(square => square.squareType === 'solution');
    }

    createCrossword() {

        this.createCrosswordTable();
        this.createSlots();
    }

    createCrosswordTable() {

        const table = document.createElement('table');
        table.classList.add('crossword__table');

        for (let j = 0; j < this.height; j++) {
            const gridRow = [];
            const tableRow = document.createElement('tr');
            for (let i = 0; i < this.width; i++) {
                const tableCell = document.createElement('td');
                const squareData = this.data.squares[j][i];

                let square;
                if (squareData.type === 'key') {
                    const keys = squareData.keys;
                    square = new KeySquare(j, i, keys, null);
                    gridRow.push(square);
                }
                else {
                    square = new SolutionSquare(j, i, squareData, this.callbacks);
                    gridRow.push(square);
                }
                tableCell.append(square.squareElement);
                tableRow.append(tableCell);
            }
            this.squareGrid.push(gridRow);
            table.append(tableRow);
        }

        this.crosswordTable = table;
    }

    createSlots() {

        let horizontalSlots = [];
        let verticalSlots = [];

        // Convert the square grid into a grid of booleans,
        // where 'true' corresponds to a key square 
        const typeGrid = this.squareGrid.map(row => {
            return row.map(square => square.squareType === 'key');
        });

        // Horizontal slots
        let possibleHorizontalSlot = [];

        for (let j = 0; j < this.height; j++) {
            // Reset for each row
            let i = 0;
            while (i < this.width) {
                // If a key is found
                if (typeGrid[j][i]) {
                    if (possibleHorizontalSlot.length > 1) {
                        horizontalSlots.push( new Slot(possibleHorizontalSlot, 'horizontal') );
                    }
                    possibleHorizontalSlot = [];
                    i += 1;
                } else if (i === this.width - 1) {
                    if (possibleHorizontalSlot.length > 0) {
                        possibleHorizontalSlot.push(this.squareGrid[j][i]);
                        horizontalSlots.push( new Slot(possibleHorizontalSlot, 'horizontal') );
                    }
                    possibleHorizontalSlot = [];
                    i += 1;
                } else {
                    possibleHorizontalSlot.push(this.squareGrid[j][i]);
                    i += 1;
                }
            }
        }

        // Vertical slots
        let possibleVerticalSlot = [];

        for (let i = 0; i < this.width; i++) {
            // Reset for each column
            let j = 0;
            while (j < this.height) {
                // If a key is found
                if (typeGrid[j][i]) {
                    if (possibleVerticalSlot.length > 1) {
                        verticalSlots.push( new Slot(possibleVerticalSlot, 'vertical') );
                    }
                    possibleVerticalSlot = [];
                    j += 1;
                } else if (j === this.height - 1) {
                    if (possibleVerticalSlot.length > 0) {
                        possibleVerticalSlot.push(this.squareGrid[j][i]);
                        verticalSlots.push( new Slot(possibleVerticalSlot, 'vertical') );
                    }
                    possibleVerticalSlot = [];
                    j += 1;
                } else {
                    possibleVerticalSlot.push(this.squareGrid[j][i]);
                    j += 1;
                }
            }
        }

        this.horizontalSlots = horizontalSlots;
        this.verticalSlots = verticalSlots;
    }

    setActiveSquare(newActiveSquare) {

        const previousActiveSolutionSquare = this.activeSolutionSquare;
        if (previousActiveSolutionSquare !== undefined) {
            previousActiveSolutionSquare.squareHighlightOff();
        }

        if (this.activeSlot.solutionSquares.includes(previousActiveSolutionSquare)) {
            previousActiveSolutionSquare.slotHighlightOn();
        }

        newActiveSquare.squareHighlightOn();
        this.activeSolutionSquare = newActiveSquare;

    }

    setActiveSlot(newActiveSlot) {

        const previousActiveSlot = this.activeSlot;
        if (previousActiveSlot !== undefined) {
            previousActiveSlot.highlightOff();
        }

        if (newActiveSlot !== undefined) {
            newActiveSlot.highlightOn();
            this.activeSlot = newActiveSlot;
        } else {
            this.activeSlot = undefined;
        }

    }

    toggleSolution() {
        this.isShowingSolution ? this.hideSolution() : this.showSolution();
    }

    showSolution() {

        // Hide edit highlights
        if (this.activeSlot) this.activeSlot.highlightOff();
        if (this.activeSolutionSquare) this.activeSolutionSquare.squareHighlightOff();

        this.solutionSquares.forEach(square => {

            square.squareElement.querySelector('.crossword__solution').textContent = square.data.correct;

            const current = square.currentSolution.toUpperCase();
            const correct = square.data.correct.toUpperCase();

            // Style text
            if (current === correct) {
                square.styleTextCorrect();
                square.solutionElement.style.color = 'green';
            } else if (
                current !== '' &&
                current !== correct
            ) {
                square.styleTextWrong();
                square.solutionElement.style.color = 'red';
            } else {
                square.styleTextDefault();
                square.solutionElement.style.color = square.solutionElement.style.getPropertyValue('--clr-fg-solution');
            }


        });

        this.isShowingSolution = true;
    }

    hideSolution() {

        this.solutionSquares.forEach(square => {

            square.squareElement.querySelector('.crossword__solution').textContent = square.currentSolution;
            square.styleTextDefault()
        });

        this.isShowingSolution = false;

        // Show edit highlights
        if (this.activeSlot) this.activeSlot.highlightOn();
        if (this.activeSolutionSquare) {
            this.activeSolutionSquare.squareHighlightOn();
            this.activeSolutionSquare.solutionElement.focus();
        }
        

    }

    onSolutionSquareClick(solutionSquare) {

        if (this.isShowingSolution) return;

        // Handle active orientation
        if (solutionSquare === this.activeSolutionSquare) {

            if (this.activeOrientation === 'horizontal') {
                this.activeOrientation = 'vertical';
            } else {
                this.activeOrientation = 'horizontal';
            }
        }

        // Handle active slot
        const newActiveSlot = solutionSquare.getSlot(this.activeOrientation);
        this.setActiveSlot(newActiveSlot);

        // Handle active square
        this.setActiveSquare(solutionSquare);

    }

    onSolutionSquareWrite(solutionSquare) {

        const squareIndex = this.activeSlot.solutionSquares.findIndex(square => square === solutionSquare);

        if (squareIndex < this.activeSlot.solutionSquares.length - 1) {
            const nextSquare = this.activeSlot.solutionSquares[squareIndex + 1];
            nextSquare.solutionElement.focus();

            this.setActiveSquare(nextSquare);
        }

    }

    onSolutionSquareErase(solutionSquare) {

        const squareIndex = this.activeSlot.solutionSquares.findIndex(square => square === solutionSquare);

        if (squareIndex > 0) {
            const nextSquare = this.activeSlot.solutionSquares[squareIndex - 1];
            nextSquare.solutionElement.focus();

            this.setActiveSquare(nextSquare);
        }
    }
}