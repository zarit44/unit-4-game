  // var targetNum = Math.floor(Math.random()*20) + 100;
  var targetNum = Math.floor(Math.random() * 20) + 100;
  var counter = 0;
  var numOptions = [1, 2, 3, 4];
  var increment = numOptions[Math.round(Math.random() * 1) + 1];

  function restart() {
      targetNum = Math.floor(Math.random() * 20) + 100;
      $("#baseNum").text(targetNum);
      counter = 0;
      $("#scoreNum").text(counter);
  }





  $("#baseNum").text(targetNum);
  $("#scoreNum").text(counter);
  

  $("#btnOne").on("click", function () {

      counter += 12;
      $("#scoreNum").text(counter);


      if (counter === targetNum) {

          restart();
      }

      else if (counter >= targetNum) {

          restart();
      }


  });

  var counter = 0;
  $("#btnTwo").on("click", function () {

      counter += 8;
      $("#scoreNum").text(counter);

      if (counter === targetNum) {
        
          restart();
      }

      else if (counter >= targetNum) {
          restart();
      }

  });

  var counter = 0;
  $("#btnThree").on("click", function () {

      counter += 6;
      $("#scoreNum").text(counter);


      if (counter === targetNum) {
          restart();
      }

      else if (counter >= targetNum) {
          restart();
      }

  });

  var counter = 0;
  $("#btnFour").on("click", function () {

      counter += 11;
      $("#scoreNum").text(counter);


      if (counter === targetNum) {
          restart();
      }

      else if (counter >= targetNum) {
          restart();
      }

  });


