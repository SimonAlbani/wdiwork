# Simon Game

## Game logic pseudocode

1.  create 4 squares
2.  square 1 is red
3.  square 2 is blue
4.  square 3 is yellow
5.  square 4 is green
6.  create a reset game function where the array will get emptied out.
7.  each square has a value
8.  when a value is selected the square will flash
9.  create empty array called simon
10. select a random value and put it into the array
11. go through array in the order listed to let square flash
12. have the even listener pick up if the user has clicked on the square with the same value as what is in the array
13. if the user has clicked the correct square move to the next level
    ..\* else reset the game by running the reset game function
14. obtain another random value and add it to the end of the simon array
15. go through the array in the order listed to let the apropriate square flash
16. if the user has clicked the correct squares in the correct order move to the next level
    ..\* if the user has not clicked the correct squares in the correct order run the reset game function
17. continue to add a random value to the array until the user chooses the incorrect value