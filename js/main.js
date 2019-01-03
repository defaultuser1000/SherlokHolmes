function createInterface() {
    const body = document.getElementsByTagName('body')[0];

    const app_table = document.createElement('div');
    app_table.setAttribute('class', 'app_table');

    //Основная таблица
    const main_table = document.createElement('div');
    main_table.setAttribute('class', 'main_table');

    for (let a = 0; a < 2; a++) {
        const main_row = document.createElement('div');
        main_row.setAttribute('class', 'main_row');
        for (let b = 0; b < 1; b++) {
            const main_cell = document.createElement('div');
            main_cell.setAttribute('class', 'main_cell');
            if (a === 0) {
                const game_table = document.createElement('div');
                game_table.setAttribute('class', 'game_table');
                for (let c = 0; c < 1; c++) {
                    const game_row = document.createElement('div');
                    game_row.setAttribute('class', 'game_row');
                    for (let d = 0; d < 2; d++) {
                        const game_cell = document.createElement('div');
                        game_cell.setAttribute('class', 'game_cell');
                        if (d === 0) {
                            const left_game_table = document.createElement('div');
                            left_game_table.setAttribute('class', 'left_game_table');
                            for (let e = 0; e < 2; e++) {
                                const left_game_row = document.createElement('div');
                                left_game_row.setAttribute('class', 'left_game_row');
                                for (let f = 0; f < 1; f++) {
                                    const left_game_cell = document.createElement('div');
                                    left_game_cell.setAttribute('class', 'left_game_cell');
                                    if (e === 0) {
                                        const main_action = document.createElement('div');
                                        main_action.setAttribute('class', 'main_action');
                                        for (let g = 0; g < 1; g++) {
                                            const main_action_row = document.createElement('div');
                                            main_action_row.setAttribute('class', 'main_action_row');
                                            for (let h = 0; h < 6; h++) {
                                                const main_action_cell = document.createElement('div');
                                                main_action_cell.setAttribute('class', 'main_action_cell');
                                                const table = document.createElement('div');
                                                table.setAttribute('class', 'group_table');
                                                for (let i = 0; i < 6; i++) {
                                                    const row = document.createElement('div');
                                                    row.setAttribute('class', 'group_row');
                                                    for (let j = 0; j < 1; j++) {
                                                        const cell = document.createElement('div');
                                                        cell.setAttribute('class', 'group_cell');
                                                        const table2 = document.createElement('div');
                                                        table2.setAttribute('class', 'table');
                                                        for (let k = 0; k < 2; k++) {
                                                            const row2 = document.createElement('div');
                                                            row2.setAttribute('class', 'row');
                                                            for (let l = 0; l < 3; l++) {
                                                                const cell2 = document.createElement('div');
                                                                cell2.setAttribute('class', 'cell');
                                                                row2.appendChild(cell2);
                                                            }
                                                            table2.appendChild(row2);
                                                        }
                                                        cell.appendChild(table2);
                                                        row.appendChild(cell);
                                                    }
                                                    table.appendChild(row);
                                                    main_action_cell.appendChild(table);
                                                }
                                                main_action_row.appendChild(main_action_cell);
                                            }
                                            main_action.appendChild(main_action_row);
                                            left_game_cell.appendChild(main_action);
                                        }
                                    } else if (e === 1) {
                                        const menu = document.createElement('div');
                                        menu.setAttribute('class', 'menu');
                                        for (let m = 0; m < 1; m++) {
                                            const menu_row = document.createElement('div');
                                            menu_row.setAttribute('class', 'menu_row');
                                            for (let n = 0; n < 2; n++) {
                                                const menu_cell = document.createElement('div');
                                                menu_cell.setAttribute('class', 'menu_cell');
                                                if (n === 0) {
                                                    const buttons_table = document.createElement('div');
                                                    buttons_table.setAttribute('class', 'buttons_table');
                                                    for (let o = 0; o < 2; o++) {
                                                        const buttons_row = document.createElement('div');
                                                        buttons_row.setAttribute('class', 'buttons_row');
                                                        for (let p = 0; p < 2; p++) {
                                                            const button_cell = document.createElement('div');
                                                            button_cell.setAttribute('class', 'buttons_cell');
                                                            buttons_row.appendChild(button_cell);
                                                        }
                                                        buttons_table.appendChild(buttons_row);
                                                    }
                                                    menu_cell.appendChild(buttons_table);
                                                } else if (n === 1) {
                                                    const info_table = document.createElement('div');
                                                    info_table.setAttribute('class', 'info_table');
                                                    for (let q = 0; q < 3; q++) {
                                                        const info_row = document.createElement('div');
                                                        info_row.setAttribute('class', 'info_row');
                                                        for (let r = 0; r < 1; r++) {
                                                            const info_cell = document.createElement('div');
                                                            info_cell.setAttribute('class', 'info_cell');
                                                            info_row.appendChild(info_cell);
                                                        }
                                                        info_table.appendChild(info_row);
                                                    }
                                                    menu_cell.appendChild(info_table);
                                                }
                                                menu_row.appendChild(menu_cell);
                                            }
                                            menu.appendChild(menu_row);
                                        }
                                        left_game_cell.appendChild(menu);
                                    }
                                    left_game_row.appendChild(left_game_cell);
                                }
                                left_game_table.appendChild(left_game_row);
                                game_cell.appendChild(left_game_table);
                            }
                            game_row.appendChild(game_cell);
                        } else if (d === 1) {
                            const right_hints_table = document.createElement('div');
                            right_hints_table.setAttribute('class', 'right_hints_table');
                            for (let s = 0; s < 1; s++) {
                                const right_hints_row = document.createElement('div');
                                right_hints_row.setAttribute('class', 'right_hints_row');
                                for (let t = 0; t < 3; t++) {
                                    const right_hints_cell = document.createElement('div');
                                    right_hints_cell.setAttribute('class', 'right_hints_cell');
                                    const right_hints_column_table = document.createElement('div');
                                    right_hints_column_table.setAttribute('class', 'right_hints_column_table');
                                    for (let u = 0; u < 7; u++) {
                                        const right_hints_column_row = document.createElement('div');
                                        right_hints_column_row.setAttribute('class', 'right_hints_column_row');
                                        for (let v = 0; v < 3; v++) {
                                            const right_hints_column_cell = document.createElement('div');
                                            right_hints_column_cell.setAttribute('class', 'right_hints_column_cell');
                                            right_hints_column_row.appendChild(right_hints_column_cell);
                                        }
                                        right_hints_column_table.appendChild(right_hints_column_row);
                                    }
                                    right_hints_cell.appendChild(right_hints_column_table);
                                    right_hints_row.appendChild(right_hints_cell);
                                }
                                right_hints_table.appendChild(right_hints_row);
                            }
                            game_cell.appendChild(right_hints_table);
                        }
                        game_row.appendChild(game_cell);
                    }
                    game_table.appendChild(game_row);
                }
                main_cell.appendChild(game_table);
            } else if (a === 1) {
                const bottom_hints_table = document.createElement('div');
                bottom_hints_table.setAttribute('class', 'bottom_hints_table');
                for (let w = 0; w < 2; w++) {
                    const bottom_hints_row = document.createElement('div');
                    bottom_hints_row.setAttribute('class', 'bottom_hints_row');
                    for (let x = 0; x < 18; x++) {
                        const bottom_hints_cell = document.createElement('div');
                        bottom_hints_cell.setAttribute('class', 'bottom_hints_cell');

                        bottom_hints_row.appendChild(bottom_hints_cell);
                    }
                    bottom_hints_table.appendChild(bottom_hints_row);
                }
                main_cell.appendChild(bottom_hints_table);
            }
            main_row.appendChild(main_cell);
        }
        main_table.appendChild(main_row);
    }
    app_table.appendChild(main_table);

    body.appendChild(app_table);
    body.appendChild(createMenuForm());

}

function createMenuForm() {
    const menuForm = document.createElement('div');
    menuForm.setAttribute('id','menuForm');

    const background = document.createElement('div');
    background.setAttribute('class','blurBackground');
    background.setAttribute('style',"display: none;");

    const closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'button');
    closeButton.setAttribute('id','close');

    const spanCloseButton = document.createElement('span');
    spanCloseButton.innerText = 'Close dat shit!';

    closeButton.appendChild(spanCloseButton);
    menuForm.appendChild(closeButton);
    background.appendChild(menuForm);

    return background;
}

function fillTableWithContent() {
    fillGameMatrix();
    fillMenu();
}

function fillGameMatrix() {
    const gameColumn = document.getElementsByClassName('main_action_cell');
    const columnRowContent = ['human', 'house', 'animal', 'fruit', 'sign', 'alphabet'];

    for (let i = 0; i < gameColumn.length; i++) {
        const columnGroupRow = gameColumn[i].getElementsByClassName('group_cell');
        for (let j = 0; j < columnGroupRow.length; j++) {
            let id = 1;
            columnGroupRow[j].className += ' ' + columnRowContent[j];
            const tableCells = columnGroupRow[j].getElementsByClassName('cell');
            for (let k = 0; k < tableCells.length; k++) {
                tableCells[k].setAttribute('id', (columnRowContent[j]) + (id++));
                const content = document.createElement('img');
                content.setAttribute('src','images/' + columnRowContent[j] + '/' + (k + 1) + '.png');
                tableCells[k].appendChild(content);
            }
        }
    }
}

function fillMenu() {
    const menu = document.getElementsByClassName('menu')[0];

    const buttons = menu.getElementsByClassName('buttons_cell');
    const buttons_text = ['MENU', 'OTHER CLUES', 'UNDO', 'HINT'];
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].appendChild(document.createTextNode(buttons_text[i]));
    }

    const info = menu.getElementsByClassName('info_cell');
    const puzzle = 3341;
    const time = '00:15:25';
    const player = 'PLAYER 1';
    const info_text = ['Name: ' + player, 'Time: ' + time, 'Puzzle: ' + puzzle];
    for (let j = 0; j < info.length; j++) {
        info[j].appendChild(document.createTextNode(info_text[j]));
    }
}

createInterface();
fillTableWithContent();
createIdsForButtons();

document.querySelectorAll('.cell').forEach(function (item, idx) {
    item.addEventListener('click', function () {
        const groupCellOfSelected = item.parentElement.parentElement.parentElement;
        const selectedCell = item;
        const selectedCellId = item.id;
        let height = item.parentElement.parentElement.clientHeight;

        if (groupCellOfSelected.className.match('group_cell')) {
            selectedCell.className = groupCellOfSelected.className;
            selectedCell.setAttribute('style','height: ' + height + 'px;');
            groupCellOfSelected.replaceWith(selectedCell);
            historyMap.set(selectedCell,groupCellOfSelected);
        }
        const similarGroupCells = document.getElementsByClassName(groupCellOfSelected.className);
        for (let i = 0; i < similarGroupCells.length; i++) {
            const hidingCell = similarGroupCells[i].querySelector('#' + selectedCellId);
            if (similarGroupCells[i].firstElementChild.className.match('table')) {
                hidingCell.className += ' disabled';
            }
        }

        // console.log(similarGroupCells);
        //
        // console.log('Clicked ', idx, item.className, item.id, ' of ', groupCellOfSelected);
    });
});

let historyList = new Map();
let historyMap = new Map();


function createIdsForButtons() {
    const menuButtons = document.getElementsByClassName('buttons_cell');
    const ids = ['menu','other_clues','undo','hint'];
    for (let i = 0; i < menuButtons.length; i++) {
        menuButtons[i].setAttribute('id',ids[i]);
    }
}

document.getElementById('menu').addEventListener('click', function(e) {
    $('.blurBackground').fadeToggle(200);
    //e.preventDefault();
});

document.getElementById('other_clues').addEventListener('click', function() {
    console.log('Clicked other_clues');
});

document.getElementById('undo').addEventListener('click', function() {
    let historySize = historyMap.size;
    let counter = 0;
    if (historySize > 0) {
        historyMap.forEach(function(value, key, map) {
            counter++;
            //key = historyMap[value];
            if (counter === historySize) {
                console.log(map[key]);
            }
        });
    }
    console.log(historyMap);
    //console.log(historyMap.get[history.length-1]);
});

document.getElementById('hint').addEventListener('click', function() {
    console.log('Clicked hint');
});

document.getElementById('close').addEventListener('click', function() {
    $('.blurBackground').fadeToggle(200);
});