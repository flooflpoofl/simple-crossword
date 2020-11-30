class Crossword {
    
    constructor(container, data) {
        this.container = container;
        this.data = data;

        this.crosswordGrid = new CrosswordGrid(data);
        this.crosswordOptions = this.createOptions();

        this.currentTheme = 'light';

        this.addComponents();
    }

    addComponents() {
        // Simulate crossword loading
        setTimeout(() => {
            // Clear container
            this.container.innerHTML = "";
            // Add crossword grid
            this.container.append(this.crosswordGrid.crosswordTable);
            // Add options menu
            this.container.append(this.crosswordOptions);
        }, 1000);
    }

    createOptions() {

        const options = document.createElement('div');
        options.classList.add('options');

        // Solution toggle
        const solutionToggle = document.createElement('div');
        solutionToggle.classList.add('option-group');
        solutionToggle.setAttribute('data-option', 'solution');

        const solutionToggleIcon = document.createElement('i');
        solutionToggleIcon.classList.add('material-icons');
        solutionToggleIcon.innerHTML = 'visibility';

        const solutionToggleText = document.createElement('span');
        solutionToggleText.innerHTML = 'Visa lösning';

        solutionToggle.append(solutionToggleIcon, solutionToggleText);

        solutionToggle.addEventListener('click', () => {
            this.toggleSolution();
        });

        options.append(solutionToggle);

        // Color theme toggle
        const themeToggle = document.createElement('div');
        themeToggle.classList.add('option-group');
        themeToggle.setAttribute('data-option', 'theme');

        const themeToggleIcon = document.createElement('i');
        themeToggleIcon.classList.add('material-icons');
        themeToggleIcon.innerHTML = 'palette';

        const themeToggleText = document.createElement('span');
        themeToggleText.innerHTML = 'Mörkt';

        themeToggle.append(themeToggleIcon, themeToggleText);

        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        options.append(themeToggle);

        return options;
    }

    toggleSolution() {

        // Show or hide solution
        this.crosswordGrid.toggleSolution();

        // Update button content
        const optionGroup = this.crosswordOptions.querySelector('.option-group[data-option=solution]');
        if (this.crosswordGrid.isShowingSolution) {
            optionGroup.querySelector('i').innerHTML = 'visibility_off';
            optionGroup.querySelector('span').innerHTML = 'Göm lösning';
        } else {
            optionGroup.querySelector('i').innerHTML = 'visibility';
            optionGroup.querySelector('span').innerHTML = 'Visa lösning';
        }

    }

    toggleTheme() {
        const themeLink = document.getElementById('color-theme');
        const optionGroup = this.crosswordOptions.querySelector('.option-group[data-option=theme]');

        if (this.currentTheme === 'light') {
            themeLink.href = './css/themes/dark.css';
            optionGroup.querySelector('span').innerHTML = 'Ljust';
            this.currentTheme = 'dark';
        } else {
            themeLink.href = './css/themes/light.css';
            optionGroup.querySelector('span').innerHTML = 'Mörkt';
            this.currentTheme = 'light';
        }
    }
}