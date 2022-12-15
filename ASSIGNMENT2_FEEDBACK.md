Hi Ida!

Nice work! As you will see below you've nearly met all the requirements and the things to fix are pretty small.

However, you have a problem in your logic when a user enters a letter that appears more than once. To explain:

If "December" is the answer and the user enters "e" on thir first guess:

1. The loop at line 31 starts and runs 8 times. Each time it finds an "e" this happens:
  2. Line 32 - remainingLetters - started at 8 - goes down by 1
  3. Line 33 - lives - started at 6 - goes up by one
When the for loop ends it will have found 3 'e's - so remaining letters is at 5  and lives is on 9.
4. line 39 lives is now 8.

If the user enters "e" on the second guess the loop runs again and the same thing happens: after the loop remainng letters is at 2 and lives is at 10!

If they enter "e" a third time they win the game with 12 lives left!

So what you need to do is
1. Create an array of user letters
2. There is an array method called "includes" - https://www.w3schools.com/jsref/jsref_includes_array.asp that will return a boolean 
3. Test if the user has already used the letter and decide what should happen if they have
4. Test if the word includes the letter before calling the loop at line 31. AFTER thhe loop hhas finished then add 1 life. Eg something like

if (the letter is in the word) {
  for (run the loop) {
    ...
  }
  lives ++;
} 

So could you please fix these things and resubmit?


*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

Constant or let variable: ✅ ❌
'var' is depreciated, if the value will not change mak it a const, if not make it a let

Array: ✅

Random selection from array: ✅

Loops:
  For: ✅

  While: ✅

Comparison with user entered data: ✅

Final message: ✅

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

Comparison with an array: ✅

Nested logic: ✅

Input validation: ✅ ❌
  User can enter numbers

Cancel button handling: ✅ ❌
  Show a message if the cancel button is pressed

Semantic variable naming: ✅

Code style: ✅ ❌
Mostly good, a few missed indentations -line 17 and the loop starting at line 23, line 32