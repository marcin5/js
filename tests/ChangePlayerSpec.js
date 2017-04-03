describe('ChangePlayer', function () {

    beforeEach(function () {
    });

  	it("should change player in next game on O", function() {
      //Given
      gameOn = true;
      turnToStart = 'X';
      spyOn(window, 'alert');

      //When
  		player.switchPlayer();

      //Than
  		expect(window.alert).toHaveBeenCalledWith(' next game O will start');
      expect(turnToStart).toEqual('O');
  	});

    it("should change player in next game on X", function() {
      //Given
      gameOn = true;
      turnToStart = 'O';
      spyOn(window, 'alert');

      //When
  		player.switchPlayer();

      //Than
  		expect(window.alert).toHaveBeenCalledWith(' next game X will start');
      expect(turnToStart).toEqual('X');
  	});

    it("should change player on O", function() {
      //Given
      gameOn = false;
      turn = 'X';

      var span = document.createElement('span');
      spyOn(document, 'getElementById').and.returnValue(span);

      //When
      player.switchPlayer();

      //Than
      expect(turn).toEqual('O');
    });

    it("should change player on X", function() {
      //Given
      gameOn = false;
      turn= 'O';

      var span = document.createElement('span');
      spyOn(document, 'getElementById').and.returnValue(span);;

      //When
      player.switchPlayer();

      //Than
      expect(turn).toEqual('X');
    });

  });
