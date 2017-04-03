describe('History', function() {

  beforeEach(function () {

      });

	it("should count o won", function() {
		historyModule.oWon();
		expect(historyModule.getTimesOWon()).toEqual(1);
	});

	it("should count x won", function() {
		historyModule.xWon();
		expect(historyModule.getTimesXWon()).toEqual(1);
	});

	it("should count draw", function() {
		historyModule.wasDraw();
		expect(historyModule.getTimesWasDraw()).toEqual(1);
	});

});
