$(document).ready(function() {

  $("form#aboutYou").submit(function(event) {

    event.preventDefault();

    $(".studResult").hide();

    var yrStrength = parseInt($("#myStrength").val());
    var yrBreakfast = parseInt($("#myBreakfast").val());
    var yrAnger = parseInt($("#myAnger").val());
    var yrNightTime = parseInt($("#myNightTime").val());
    var studlyScore = yrStrength + yrBreakfast + yrAnger + yrNightTime;

    if (studlyScore <= 2) {
      $("#studlyGuy1").show();
    }
    else if (studlyScore > 2 && studlyScore <= 5) {
      $("#studlyGuy2").show();
    }
    else if (studlyScore > 5 && studlyScore <= 8) {
      $("#studlyGuy3").show();
    }
    else {
      $("#studlyGuy4").show();
    }
  });
});
