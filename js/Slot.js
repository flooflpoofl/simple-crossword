class Slot {

    constructor(solutionSquares, orientation) {
        this.solutionSquares = solutionSquares;
        this.orientation = orientation;

        this.addSlotToSquares();
    }

    addSlotToSquares() {

        if (this.orientation === 'horizontal') {

            this.solutionSquares.forEach(solutionSquare => {
                solutionSquare.horizontalSlot = this;
            });

        } else if (this.orientation === 'vertical') {

            this.solutionSquares.forEach(solutionSquare => {
                solutionSquare.verticalSlot = this;
            });
        }

    }

    highlightOn() {
        this.solutionSquares.forEach( solutionSquare => solutionSquare.slotHighlightOn() );
    }

    highlightOff() {
        this.solutionSquares.forEach( solutionSquare => solutionSquare.slotHighlightOff() );
    }
}
