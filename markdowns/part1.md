# Australian Voting Legacy	

Australian ballots require that voters rank all the candidates in order of choice. Initially only the first choices are counted, and if one candidate receives more than 50% of the vote then that candidate is elected. However, if no candidate receives more than 50%, all candidates tied for the lowest number of votes are eliminated. Ballots ranking these candidates first are recounted in favor of their highest-ranked non-eliminated candidate. This process of eliminating the weakest candidates and counting their ballots in favor of the preferred non-eliminated candidate continues until one candidate receives more than 50% of the vote, or until all remaining candidates are tied.

Source:
http://www.programming-challenges.com/pg.php?page=downloadproblem&probid=110108&format=html

# Check for the winner

Write a `getWinner` function that takes an array of candidates and a matrix of ballots as parameters and returns the winner string.

## Sample Input and Output

Input: ["John Doe", "Jane Smith", "Jane Austen"],[[1 2 3], [2 1 3], [2 3 1], [1 2 3], [3 1 2]]
Output: "John Doe"

@[Write the getWinner function]({"stubs": ["getWinner.js"], "command": "/project/target/node_modules/mocha/bin/mocha test/testGetWinner.js"})
