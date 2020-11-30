class KeySquare extends Square {

    constructor(row, column, keys, callbacks) {
        super(row, column);
        this.squareType = 'key';

        this.callbacks = callbacks;

        this.addKeySquare(keys);
    }

    addKeySquare(keys) {

        keys.forEach(key => {

            const keyElement = document.createElement('div');
            keyElement.innerHTML = key.text;
            keyElement.classList.add('crossword__key');
            keyElement.style.flexGrow = key.span;

            this.squareElement.querySelector('.crossword__square-content').append(keyElement);
            
        });
        
    }

}