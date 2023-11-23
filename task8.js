let isFTBP = true // первое нажатие кнопки добавление столбца (isFirstTimeButtonPressed)
let rowNum = 0;
let nums = [1, 2, 3];

function recalcNums() {
    for (let i = 0; i < 3; i++){
        if((nums[i] + 3) >= 10){
            nums[i] += 3; 
            nums[i] = nums[i] % 10;
        } else {
            nums[i] += 3; 
        } 
    }
}

function numToWord(number) {
    const words = ["Первый", "Второй", "Третий", "Четвертый", "Пятый", "Шестой", "Седьмой", "Восьмой", "Девятый", "Десятый"];
  
    return words[number];
}


function moveUp(button) {
    var row = button.parentNode;
    var previousRow = row.previousElementSibling;
    if (previousRow) {
      row.parentNode.insertBefore(row, previousRow);
    }
}
  
function moveDown(button) {
    var row = button.parentNode;
    var nextRow = row.nextElementSibling;
    if (nextRow) {
        row.parentNode.insertBefore(nextRow, row);
    }
}

function removeRow(button) {
    var row = button.parentNode;
    row.parentNode.removeChild(row);
}
  
function addRow() {
    if (isFTBP){
        var container = document.getElementById("container");
        container.innerHTML = '';
        isFTBP = false;
    }

    var container = document.getElementById("container");
    var newRow = document.createElement("div");
    newRow.className = "row";
    newRow.innerHTML = '<input type="text" value="' + (numToWord(rowNum) === undefined ? "Ошибка!!! Нету больше номеров)" : numToWord(rowNum) )  + '"> <input type="text" value="' + nums[0].toString() + nums[1].toString() + nums[2].toString() + '"> <button onclick="moveUp(this)">↑</button> <button onclick="moveDown(this)">↓</button> <button onclick="removeRow(this)">X</button>';
    container.appendChild(newRow);


    rowNum++;
    recalcNums();
}


function saveData() {
    var container = document.getElementById("container");
    var rows = container.getElementsByClassName("row");
    var data = {}

    for (var i = 0; i < rows.length; i++) {
        var inputs = rows[i].getElementsByTagName("input");
        
        data[inputs[0].value] = inputs[1].value;
    }

    var jsonData = JSON.stringify(data);

    var jsonDisplay = document.getElementById("jsonDisplay");
    jsonDisplay.textContent = jsonData;
}



  