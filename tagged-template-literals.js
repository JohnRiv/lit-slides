const record = { wins: 6, losses: 7 };
// first argument is an array of strings, other arguments are the expressions
function myTag(strings, winExpression, lossExpression) {
  const str0 = strings[0]; // "The Eagles have "
  const str1 = strings[1]; // " wins and "
  const str2 = strings[2]; // " losses."
  const remaining = 17 - winExpression - lossExpression;
  const winning = winExpression > lossExpression;
  const strategy = winning ? 'win some more games' : 'figure out how to win';
  return `${str0}${winExpression}${str1}${lossExpression}${str2}
    With ${remaining} games to go, they better ${strategy}!`;
}
let output = myTag`The Eagles have ${record.wins} wins and ${record.losses} losses.`;

console.log(output); // The Eagles have 6 wins and 7 losses.
                     //   With 4 games to go, they better win some more games!
