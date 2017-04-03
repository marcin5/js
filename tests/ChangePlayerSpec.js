describe('changePlayer', function() {
    var changePlayer = changeStartingPlayer;
    var dummyElement = document.createElement("switchButton");
    document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

    beforeEach(function(){
        changePlayer.startingPlayer = true;
    });

    afterEach(function() {
    });

    it("should be true", function() {
        var starter = true;
        expect(startingPlayer).toEqual(starter);
    });

    it("should be false", function() {
        var starter = false;
        changePlayer.changePlayer();
        expect(startingPlayer).toEqual(starter);
    });
    ;})
