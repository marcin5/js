var board = (function () {
  return {
    clearBoard: function (square) {
      var oTable = document.getElementById('table');
      var rowLength = oTable.rows.length;

      for (var i = 0; i < rowLength; i++) {
        var oCells = oTable.rows.item(i).cells;

        for (var j = 0; j < oCells.length; j++) {
          oCells.item(j).value = 0;
          oCells.item(j).innerText = '';
        }
      }
    }
  };
})();
