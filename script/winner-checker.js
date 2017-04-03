function winCheck() {
    var x = setToTable();
    var con = true;
    var sum = new Array(4);

    for (var i = 0; i < x.length; i++) {
        sum[0] = 0;
        sum[1] = 0;
        for (var j = 0; j < x[i].length; j++) {
            sum[0] = sum[0] + x[i][j];
            sum[1] = sum[1] + x[j][i];

            if (con) {
                sum[2] = x[i][j] + x[i + 1][j + 1] + x[i + 2][j + 2];
                sum[3] = x[i][j + 2] + x[i + 1][j + 1] + x[i + 2][j];
                con = false;
            }

            for (var k = 0; k < sum.length; k++) {
                if (sum[k] == 3) {
                    setMessage("Wygral X");
                    gameEnd = true;
                    historyModule.xWon();
                    document.getElementById("xSpan").innerHTML = historyModule.getTimesXWon();
                    return;
                } else if (sum[k] == -3) {
                    setMessage("Wygral O");
                    gameEnd = true;
                    historyModule.oWon();
                    document.getElementById("oSpan").innerText = historyModule.getTimesOWon();
                    return;
                }
            }

        }
    }
    remisCheck();
}

function remisCheck(){
  remis++;
  if(remis == 9){
    setMessage("Remis");
    gameEnd = true;
    historyModule.wasDraw();
    document.getElementById("tiedSpan").innerText = historyModule.getTimesWasDraw();
  }
}

function setToTable() {
    var oTable = document.getElementById("table");
    var rowLength = oTable.rows.length;
    var x = new Array(rowLength);

    for (i = 0; i < rowLength; i++) {
        var oCells = oTable.rows.item(i).cells;
        var cellLength = oCells.length;

        x[i] = new Array(cellLength);

        for (var j = 0; j < cellLength; j++) {
            x[i][j] = oCells.item(j).value;
        }
    }
    return x;
}
