// var json = (function() {
//   var json = null;
//   $.ajax({
//     'async': false,
//     'global': false,
//     'url': "resources/game_table_structure.json",
//     'dataType': "json",
//     'success': function(data) {
//       json = data;
//     }
//   });
//   return json;
// })();

function createInterface() {
  var body = document.getElementsByTagName('body')[0];

  var app_table = document.createElement('div');
  app_table.setAttribute('class', 'app_table');

  //Основная таблица
  var main_table = document.createElement('div');
  main_table.setAttribute('class', 'main_table');

  for (var a = 0; a < 2; a++) {
    var main_row = document.createElement('div');
    main_row.setAttribute('class', 'main_row');
    for (var b = 0; b < 1; b++) {
      var main_cell = document.createElement('div');
      main_cell.setAttribute('class', 'main_cell');
      if (a == 0) {
        var game_table = document.createElement('div');
        game_table.setAttribute('class', 'game_table');
        for (var c = 0; c < 1; c++) {
          var game_row = document.createElement('div');
          game_row.setAttribute('class', 'game_row');
          for (var d = 0; d < 2; d++) {
            var game_cell = document.createElement('div');
            game_cell.setAttribute('class', 'game_cell');
            if (d == 0) {
              var left_game_table = document.createElement('div');
              left_game_table.setAttribute('class', 'left_game_table');
              for (var g = 0; g < 2; g++) {
                var left_game_row = document.createElement('div');
                left_game_row.setAttribute('class', 'left_game_row');
                for (var h = 0; h < 1; h++) {
                  var left_game_cell = document.createElement('div');
                  left_game_cell.setAttribute('class', 'left_game_cell');
                  if (g == 0) {
                    var main_action = document.createElement('div');
                    main_action.setAttribute('class', 'main_action');
                    for (var i = 0; i < 1; i++) {
                      var main_action_row = document.createElement('div');
                      main_action_row.setAttribute('class', 'main_action_row');
                      for (var j = 0; j < 6; j++) {
                        var main_action_cell = document.createElement('div');
                        main_action_cell.setAttribute('class', 'main_action_cell');
                        var table = document.createElement('div');
                        table.setAttribute('class', 'group_table');
                        for (var k = 0; k < 6; k++) {
                          var row = document.createElement('div');
                          row.setAttribute('class', 'group_row');
                          for (var l=0; l < 1; l++) {
                            var cell = document.createElement('div');
                            cell.setAttribute('class', 'group_cell');
                            var table2 = document.createElement('div');
                            table2.setAttribute('class', 'table');
                            // var number = 0;
                            for (var s = 0; s < 2; s++) {
                              var row2 = document.createElement('div');
                              row2.setAttribute('class', 'row');
                              for (var t = 0; t < 3; t++) {
                                var cell2 = document.createElement('div');
                                cell2.setAttribute('class', 'cell');
                                // var text = document.createTextNode(++number);
                                // cell2.appendChild(text);
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
                  } else if (g == 1) {
                    var menu = document.createElement('div');
                    menu.setAttribute('class', 'menu');
                    for (var o = 0; o < 1; o++) {
                      var menu_row = document.createElement('div');
                      menu_row.setAttribute('class', 'menu_row');
                      for (var p = 0; p < 2; p++) {
                        var menu_cell = document.createElement('div');
                        menu_cell.setAttribute('class', 'menu_cell');
                        if (p == 0) {
                          var buttons_table = document.createElement('div');
                          buttons_table.setAttribute('class', 'buttons_table');
                          for (var q = 0; q < 2; q++) {
                            var buttons_row = document.createElement('div');
                            buttons_row.setAttribute('class', 'buttons_row');
                            for (var r = 0; r < 2; r++) {
                              var button_cell = document.createElement('a');
                              button_cell.setAttribute('href', '#');
                              button_cell.setAttribute('class', 'buttons_cell');
                              // var buttons_cell = document.createElement('div');
                              // buttons_cell.setAttribute('class', 'buttons_cell');
                              // a.appendChild(buttons_cell);
                              buttons_row.appendChild(button_cell);
                            }
                            buttons_table.appendChild(buttons_row);
                          }
                          menu_cell.appendChild(buttons_table);
                        } else if (p == 1) {
                          var info_table = document.createElement('div');
                          info_table.setAttribute('class', 'info_table');
                          for (var q = 0; q < 3; q++) {
                            var info_row = document.createElement('div');
                            info_row.setAttribute('class', 'info_row');
                            for (var r = 0; r < 1; r++) {
                              var info_cell = document.createElement('div');
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
            } else if (d == 1) {
              var right_hints_table = document.createElement('div');
              right_hints_table.setAttribute('class', 'right_hints_table');
              for (var m = 0; m < 1; m++) {
                var right_hints_row = document.createElement('div');
                right_hints_row.setAttribute('class', 'right_hints_row');
                for (var n = 0; n < 3; n++) {
                  var right_hints_cell = document.createElement('div');
                  right_hints_cell.setAttribute('class', 'right_hints_cell');
                  var right_hints_column_table = document.createElement('div');
                  right_hints_column_table.setAttribute('class', 'right_hints_column_table');
                  for (var o = 0; o < 7; o++) {
                    var right_hints_column_row = document.createElement('div');
                    right_hints_column_row.setAttribute('class', 'right_hints_column_row');
                    for (var p = 0; p < 3; p++) {
                      var right_hints_column_cell = document.createElement('div');
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
      } else if (a == 1) {
        var bottom_hints_table = document.createElement('div');
        bottom_hints_table.setAttribute('class', 'bottom_hints_table');
        for (var e = 0; e < 2; e++) {
          var bottom_hints_row = document.createElement('div');
          bottom_hints_row.setAttribute('class', 'bottom_hints_row');
          for (var f = 0; f < 18; f++) {
            var bottom_hints_cell = document.createElement('div');
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
}

function fillTableWithContent() {
  fillGameMatrix();
  fillMenu();
}

function fillGameMatrix() {
  var gameColumn = document.getElementsByClassName('main_action_cell');
  var columnRowContent = ['human','house','animal','fruit','sign','alphabet'];

  for (var i = 0; i < gameColumn.length; i++) {
    //console.log(gameColumn[i]);
    var columnGroupRow = gameColumn[i].getElementsByClassName('group_cell');
    for (var j = 0; j < columnGroupRow.length; j++) {
      columnGroupRow[j].className += ' ' + columnRowContent[j];//.setAttribute('id', columnRowContent[j]);
      var tableCells = columnGroupRow[j].getElementsByClassName('cell');
      for (var k = 0; k < tableCells.length; k++) {
        tableCells[k].setAttribute('id', (columnRowContent[j]) + (k + 1));
        var content = document.createElement('img');
        content.setAttribute('src','images/' + columnRowContent[j] + '/' + (k + 1) + '.png');
        tableCells[k].appendChild(content);
      }
      // var tables = document.getElementsByClassName('fruit');
      // //console.log(tables);
      //
      // if (tables != null) {
      //   //console.log(tables);
      //   for (var i = 0; i < tables.length; i++) {
      //     // var innerTables = tables[i].getElementsByClassName('table');
      //     console.log(tables[i]);
      //     // for (var j = 0; j < innerTables.length; j++) {
      //     //   console.log(innerTables);
      //     // }
      //   }
      // }
      //console.log(columnGroupRow[j]);
    }
  }
}

// var tables = document.getElementsByClassName('fruit');
// //console.log(tables);
//
// if (tables != null) {
//   //console.log(tables);
//   for (var i = 0; i < tables.length; i++) {
//     var innerTables = tables[i].getElementsByClassName('table');
//     console.log(tables[i]);
//     // for (var j = 0; j < innerTables.length; j++) {
//     //   console.log(innerTables);
//     // }
//   }
// }

// if (tables != null) {
//     for (var i = 0; i < tables.rows.length; i++) {
//         for (var j = 0; j < tables.rows[i].cells.length; j++)
//         tables.rows[i].cells[j].onclick = function () {
//             tableText(this);
//         };
//     }
// }

function tableText(tableCell) {
    alert(tableCell.innerHTML);
}

// function fillHumanRow(cells) {
//   for (int i = 0; i < cells.length; i++) {
//     var cell = table[i].getElementsByClassName('cell');
//     var image = document.createElement('img');
//     image.setAttribute('src', '');
//     image.setAttribute('id',('human' + (i + 1));
//     cell.appendChild(image);
//     cells.appendChild(cell);
//   }
//
//   return cells;
// }

function fillHouseRow() {

}

function fillAnimalRow() {

}

function fillCigareteRow() {

}

function fillFruitRow() {

}

function fillAlphabetRow() {

}

function fillMenu() {
  var menu = document.getElementsByClassName('menu')[0];

  var buttons = menu.getElementsByClassName('buttons_cell');
  var buttons_text = ['MENU','OTHER CLUES','UNDO','HINT'];
  for (var i = 0; i < buttons.length; i++) {
    var text = document.createTextNode(buttons_text[i]);
    buttons[i].appendChild(text);
  }

  var info = menu.getElementsByClassName('info_cell');
  var puzzle = 3341;
  var time = '00:15:25';
  var player = 'PLAYER 1';
  var info_text = ['Name: ' + player,'Time: ' + time,'Puzzle: ' + puzzle];
  for (var i = 0; i < info.length; i++) {
    var text = document.createTextNode(info_text[i]);
    info[i].appendChild(text);
  }
}

createInterface();
fillTableWithContent();
