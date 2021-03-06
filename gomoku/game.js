document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.board div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1

  for (var i = 0, len = squares.length; i < len; i++)

    (function(index){
    //Add an onclick to each square in the grid
      squares[i].onclick = function(){
        //If there is a winner, the game stops
        if(result.innerHTML == 'Congratulations, Player One Wins! Refresh to start a new game.' ||
        result.innerHTML == 'Congratulations, Player Two Wins! Refresh to start a new game.') {
          return;
        }
        //Player 1 plays
        if (currentPlayer === 1) {
          //If the current square is taken, you cannnot place your disc
          if (squares[index].classList.contains('taken')) {
            alert('Already taken')  
          } 
          else {
            squares[index].classList.add('taken')
            squares[index].classList.add('player-one')
            //Change the player
            currentPlayer = 2
            displayCurrentPlayer.innerHTML = currentPlayer
          }
        } //Player 2 plays
        else if (currentPlayer === 2) {
          //If the current square is taken, you cannnot place your disc
          if (squares[index].classList.contains('taken')) {
            alert('Already taken')  
          } else {
            squares[index].classList.add('taken')
            squares[index].classList.add('player-two')
            //change the player
            currentPlayer = 1
            displayCurrentPlayer.innerHTML = currentPlayer
          }
        }     
      }
  })(i)

  // Check the board for a win or lose
  function checkBoard() {
    var winHorizontal = []
    var winVertical = []
    var winDiagonal1 = []
    var winDiagonal2 = []

    for (var i = 0; i < 225; i++) {
      winHorizontal[i] = [ i, i+1, i+2, i+3, i+4 ]
    }

    for (var i = 0; i < 225; i++) {
      winVertical[i] = [ i, i+15, i+30, i+45, i+60 ]
    }

    for (var i = 0; i < 225; i++) {
      winDiagonal1[i] = [ i, i+16, i+32, i+48, i+64 ]
    }

    for (var i = 0; i < 225; i++) {
      winDiagonal2[i] = [ i, i+14, i+28, i+42, i+56 ]
    }

    //Take the 5 values in each wins and plug them into the squares
    //Check horizontal
    for(let y = 0; y < winHorizontal.length; y++) {
      const square1 = squares[winHorizontal[y][0]]
      const square2 = squares[winHorizontal[y][1]]
      const square3 = squares[winHorizontal[y][2]]
      const square4 = squares[winHorizontal[y][3]]
      const square5 = squares[winHorizontal[y][4]]

      //now check those arrays to see if they all have the class of player-one
      if(square1.classList.contains('player-one') && 
      square2.classList.contains('player-one') &&
      square3.classList.contains('player-one') &&
      square4.classList.contains('player-one') &&
      square5.classList.contains('player-one')) {
      //if they do, player-one wins
      result.innerHTML = 'Congratulations, Player One Wins! Refresh to start a new game.'
      }
      //now do the same for player-two
      else if (square1.classList.contains('player-two') && 
      square2.classList.contains('player-two') &&
      square3.classList.contains('player-two') &&
      square4.classList.contains('player-two') &&
      square5.classList.contains('player-two')) {
      //if they do, player-two wins
      result.innerHTML = 'Congratulations, Player Two Wins! Refresh to start a new game.'  
      }
    }

    //Check vertical
    for(let y = 0; y < winVertical.length; y++) {
      const square6 = squares[winVertical[y][0]]
      const square7 = squares[winVertical[y][1]]
      const square8 = squares[winVertical[y][2]]
      const square9 = squares[winVertical[y][3]]
      const square10 = squares[winVertical[y][4]]

      //now check those arrays to see if they all have the class of player-one
      if(square6.classList.contains('player-one') && 
      square7.classList.contains('player-one') &&
      square8.classList.contains('player-one') &&
      square9.classList.contains('player-one') &&
      square10.classList.contains('player-one')) {
      //if they do, player-one wins
      result.innerHTML = 'Congratulations, Player One Wins! Refresh to start a new game.'
      }
      //now do the same for player-two
      else if (square6.classList.contains('player-two') && 
      square7.classList.contains('player-two') &&
      square8.classList.contains('player-two') &&
      square9.classList.contains('player-two') &&
      square10.classList.contains('player-two')) {
      //if they do, player-two wins
      result.innerHTML = 'Congratulations, Player Two Wins! Refresh to start a new game.'  
      }
    }

    //Check diagonal1
    for(let y = 0; y < winDiagonal1.length; y++) {
      const square11 = squares[winDiagonal1[y][0]]
      const square12 = squares[winDiagonal1[y][1]]
      const square13 = squares[winDiagonal1[y][2]]
      const square14 = squares[winDiagonal1[y][3]]
      const square15 = squares[winDiagonal1[y][4]]

      //now check those arrays to see if they all have the class of player-one
      if(square11.classList.contains('player-one') && 
      square12.classList.contains('player-one') &&
      square13.classList.contains('player-one') &&
      square14.classList.contains('player-one') &&
      square15.classList.contains('player-one')) {
      //if they do, player-one wins
      result.innerHTML = 'Congratulations, Player One Wins! Refresh to start a new game.'
      }
      //now do the same for player-two
      else if (square11.classList.contains('player-two') && 
      square12.classList.contains('player-two') &&
      square13.classList.contains('player-two') &&
      square14.classList.contains('player-two') &&
      square15.classList.contains('player-two')) {
      //if they do, player-two wins
      result.innerHTML = 'Congratulations, Player Two Wins! Refresh to start a new game.'  
      }
    }

    //Check diagonal2
    for(let y = 0; y < winDiagonal2.length; y++) {
      const square16 = squares[winDiagonal2[y][0]]
      const square17 = squares[winDiagonal2[y][1]]
      const square18 = squares[winDiagonal2[y][2]]
      const square19 = squares[winDiagonal2[y][3]]
      const square20 = squares[winDiagonal2[y][4]]

      //now check those arrays to see if they all have the class of player-one
      if(square16.classList.contains('player-one') && 
      square17.classList.contains('player-one') &&
      square18.classList.contains('player-one') &&
      square19.classList.contains('player-one') &&
      square20.classList.contains('player-one')) {
      //if they do, player-one wins
      result.innerHTML = 'Congratulations, Player One Wins! Refresh to start a new game.'
      }
      //now do the same for player-two
      else if (square16.classList.contains('player-two') && 
      square17.classList.contains('player-two') &&
      square18.classList.contains('player-two') &&
      square19.classList.contains('player-two') &&
      square20.classList.contains('player-two')) {
      //if they do, player-two wins
      result.innerHTML = 'Congratulations, Player Two Wins! Refresh to start a new game.'  
      }
    }
  }

  //add an eventListener to each square that will trigger the checkBoard function on click
  squares.forEach(square => square.addEventListener('click', checkBoard))
})

