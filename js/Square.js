class Square {

    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.squareType = undefined;

        this.squareElement = this.createSquare();
    }

    createSquare() {

        const squareElement = document.createElement('div');
        squareElement.classList.add('crossword__square');
        squareElement.dataset.row = this.row;
        squareElement.dataset.column = this.column;

        const content = document.createElement('div');
        content.classList.add('crossword__square-content');

        squareElement.append(content);

        return squareElement;
    }
}