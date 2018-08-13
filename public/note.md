###Tic-Tac-Toe Markdown
# HTML
- [ ] Create nine different sections of the game board and each sections should be numbered 1 through 9.  -->
    - [ ] Flex three sections at a time. 
    - [ ] Create borders to show up as a tic-tac-toe board.
    - [ ] Create a turn counter.
    - [ ]Add a hidden victory section with absolute position and a higher Z index displaying the winner.
        - [ ] Make the  3 hidden button to also reset the game and play again.  
        - [ ] X player wins, O player wins also a tie.
    - [ ] In the footer, display player turn
## JavaScript 
- [ ] Global Variables
    - [ ] Turn counter (1-9) (max turns in the game is 9)
    - [ ] winningCombos array contain all possible winning outcomes (8 total)
    - [ ] availablePosition array (an array that will identify the board position)
    - [ ] xSquaresHeld array
    - [ ] oSquaresHeld array

- [ ] Scoring Keeping and Determining Winner
    - [ ] Push selections from availablePosition array to x/oSquaresHeld array.
    - [ ] Determine victory based off numbers inside x/oSquaresHeld arrays
            - for (let i = 0; i < winningCombos.length; i ++) {
                if (xSquaresHeld.includes(winngingCombos[i][0]) &&
                    xSquaresHeld.includes(winngingCombos[i][1]) &&
                    xSquaresHeld.includes(winngingCombos[i][2]) &&
                    ) {
                        console.log(Player X wins!)
                    }
            }

## Events 

- [ ] When squares is clicked much update DOM to show X or O, and pushed associated number to the players array, and the determineVictory function will check for a winner, if a winner is found the DOM will change to reflect so.
- [ ] A play again button will display with the winners display, this button when clicked will reset all of the arrays back to their original content and wipe the board clean of X's and O's