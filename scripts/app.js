var sq = {};

function checkSelections() {

  var radios = document.querySelectorAll('input:checked');

  for (var i = 0; i < radios.length; ++i) {
    sq[radios[i].name] = parseInt(radios[i].value);
  }

  checkWin();

}

function checkWin() {

  // x = 1
  // o = 2
  // x win = 3
  // o win = 6

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
      console.log('X wins!');
    } else if (scoreMap[i] === 6) {
      console.log('O wins!');
    }
  }

}