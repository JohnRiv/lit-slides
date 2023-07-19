const record = { wins: 52, losses: 42 };
// first argument is an array of strings, other arguments are the expressions
function myTag(strings, winExpression, lossExpression) {
  const str0 = strings[0]; // "The Phillies have "
  const str1 = strings[1]; // " wins and "
  const str2 = strings[2]; // " losses."
  const remaining = 162 - winExpression - lossExpression;
  const winning = winExpression > lossExpression;
  const strategy = winning ? 'win some more games' : 'figure out how to win';
  return `${str0}${winExpression}${str1}${lossExpression}${str2}
    With ${remaining} games to go, they better ${strategy}!`;
}
let output = myTag`The Phillies have ${record.wins} wins and ${record.losses} losses.`;

console.log(output); // The Phillies have 52 wins and 42 losses.
                     //   With 68 games to go, they better win some more games!
