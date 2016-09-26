var sq = {};

function checkSelections() {

  var radios = document.querySelectorAll('input:checked');

  for (var i = 0; i < radios.length; ++i) {
    sq[radios[i].name] = parseInt(radios[i].value);
  }

  checkWin();

}

function checkWin() {

  var scoreMap = [
    sq.r1_c1 + sq.r1_c2 + sq.r1_c3,
    sq.r2_c1 + sq.r2_c2 + sq.r2_c3,
    sq.r3_c1 + sq.r3_c2 + sq.r3_c3,
    sq.r1_c1 + sq.r2_c1 + sq.r3_c1,
    sq.r1_c2 + sq.r2_c2 + sq.r3_c2,
    sq.r1_c3 + sq.r2_c3 + sq.r3_c3,
    sq.r1_c1 + sq.r2_c2 + sq.r3_c3,
    sq.r1_c3 + sq.r2_c2 + sq.r3_c1,
  ];

  for (var i = 0; i < scoreMap.length; ++i) {
    if(scoreMap[i] === 3) {
      showWin('X');
    } else if (scoreMap[i] === 6) {
      showWin('O');
    }
  }

}

function showWin(winner) {

  var winContainer = document.getElementById('win');

  var winContent = '<strong id="winTitle" tabindex="0"><span>'+ winner +'</span> Wins!</strong><button onclick="window.location.reload()">Play again</button>';

  winContainer.style.visibility = 'visible';
  winContainer.style.opacity = '1';

  winContainer.innerHTML = winContent;

  setTimeout(function(){
    document.getElementById('winTitle').focus();
  }, 1000);


}

