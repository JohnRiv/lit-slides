import {html, render} from 'lit-html';

// create a HTML template
const template = html`
  <p>Hello world!</p>
`;

// render the template to the DOM. The first parameter is the template to render,
// the second parameter is the location to render into. This can be any DOM element
render(template, document.body);
