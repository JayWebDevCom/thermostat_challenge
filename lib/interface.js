function setUpHTMLFixture() {

     setFixtures(
       '<script>thermostat2 = new Thermostat;'
       +'$(".downButton").click(function(){'
       +'thermostat2.down();'
       +'})'
      +' </script>'
      +'  <div class="downButton"></div>'
      +'  <div class="output"></div>'
              );
   }
