describe('winnChecker', function () {

    beforeEach(function () {
    });

  	it("should win circle", function() {
      //Given
      var returnTable = [[1,1,1],[-1,1,-1],[-1,-1,1]];
      spyOn(table, 'setToTable').and.returnValue(returnTable);

      var span = document.createElement('span');
      spyOn(document, 'getElementById').and.returnValue(span);

      //When
  		win.winCheck();

      //Than
  		expect(span.innerText).toEqual('Wygral O');
      expect(gameEnd).toEqual(true);
  	});

  });
