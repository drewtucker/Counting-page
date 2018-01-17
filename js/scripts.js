$(document).ready(function() {
  $("#form1").submit(function(event){
    var countTo = parseInt($("#input1").val());
    var countBy = parseInt($("#input2").val());

    if (isNaN(countTo) || isNaN(countBy)) {
      alert("Please enter a fucking number stupid!");
      location.reload();
    } else if (countBy > countTo){
      alert("Second number must be smaller than the first, idiot!");
      location.reload();
    } else if (countTo < 0 || countBy < 0){
      alert("Please enter non-negative number, dummy!");
      location.reload();
    } else {
      event.preventDefault();
      var result = "" + countBy;
      for (var index = countBy * 2; index <= countTo; index += countBy){
        result += ", " + index;
      }
      $(".array").text(result);
      $(".result").show();
    };
  });
});
