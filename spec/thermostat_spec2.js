describe("Thermostat", function() {

  beforeEach(function() {
    setUpHTMLFixture();
  });

  describe("downButton", function() {

    it("click reduces temperature by 1 C", function(){
      $('.downButton').trigger( "click" );
      $(".output").text(thermostat2._temp);
      expect($(".output").text()).toEqual('19');
    });

  });

});
