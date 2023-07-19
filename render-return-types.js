import {html, render} from 'lit-html';

let domReturn = function() {
  let h2 = document.createElement("h2");
  h2.innerText = "DOM DOM DOM DOM DOM";
  return h2;
}
let primitiveReturn = "a string!";
let litHtmlReturn = html`
  <h1>Hello World</h1>
`;

render([litHtmlReturn, primitiveReturn, domReturn()], document.body);
