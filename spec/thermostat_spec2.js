describe("Thermostat", function() {

  function setUpHTMLFixture() {

       setFixtures(
         '<script>thermostat2 = new Thermostat;function thermostatDown(){thermostat2.down();}</script>'
        +'  <input type="text" id="txtMessage">'
        +'  <div class="downButton" onclick="thermostatDown()"></div>'
        +'  <p class="output2">``</p>'
                );
     }


  beforeEach(function() {
    setUpHTMLFixture();
  });

  describe("downButton", function() {

    it("click reduces temperature by 1 C", function(){
      $('.downButton').trigger( "click" );
      $(".output2").text(thermostat2._temp);
      expect($(".output2").text()).toEqual('19');
    });

  });

});
