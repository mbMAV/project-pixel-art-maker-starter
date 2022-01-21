// Select color input
// Select size input
    var col = document.getElementById("colorPicker").value;

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var high = document.getElementById("inputHeight").value;
    var wide = document.getElementById("inputWidth").value;
    var body = document.getElementsByTagName("body")[0];
    var table = document.getElementById("pixelCanvas");
    var tBody = document.createElement("tbody")



for (var i = 0; i < wide; i++) {
    var row = document.createElement("tr");
    tBody.appendChild(row);
    
    for (var j = 0; j < high; j++); {
        var column = document.createElement("td");
        row.appendChild(column);
    }
    tBody.appendChild(column)
    
}

table.appendChild(tBody);
document.body.appendChild(table);

tBody.addEventListener('mousedown', function (event) {
    event.target.style.backgroundColor = col.value;
})

event.preventDefault();
};
