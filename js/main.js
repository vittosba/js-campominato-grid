/*

L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/

const playBtn = document.querySelector('.play');
const difficulty = document.getElementById('difficulty');
const wrapGrid = document.querySelector('.wrap-grid');

playBtn.addEventListener('click',
    () => {
        // reset content
        wrapGrid.innerHTML = '';

        // Set grid dimensions
        const gridDimension = difficulty.value;
        let cellsNumber;
        let cellsPerSide;

        switch (gridDimension) {
            case '1':
                cellsNumber = 100;
                cellsPerSide = 10;
                break;
            case '2':
                cellsNumber = 81;
                cellsPerSide = 9;
                break;
            case '3':
                cellsNumber = 49;
                cellsPerSide = 7;
        }

        // Gen grid parent
        const grid = document.createElement('div');
        grid.classList.add('grid');

        // Gen grid square
        for (let i = 1; i <= cellsNumber; i++) {
            //Gen square
            const square = createGridSquare (i, cellsPerSide);

            square.addEventListener('click', 
                function () {
                    this.classList.add('clicked');
                }
            );
                        
            //aggiungi a grid la square gen
            grid.append(square);
        }

         // Inserisci grid
         wrapGrid.append(grid);
    }
);



/*
    FUNCTIONS
*/

// Gen square
function createGridSquare (num, cells) {
    //crea nodo square
    const node = document.createElement('div');
    node.classList.add('square');
    node.style.width = `calc(100% / ${cells})`;
    node.style.height = `calc(100% / ${cells})`;

    // Nodo span testo
    const span = document.createElement('span');
    span.append(num);

    //add a square il contenuto span
    node.append(span);

    return node;
}