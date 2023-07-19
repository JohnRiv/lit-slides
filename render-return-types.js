import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static properties = {
    greeting: { }
  }

  constructor() {
    super(); // always call super first in the constructor
    this.greeting = "hello world!"; // defaults set in the constructor
  }

  primitiveReturn = "a string!";
  domReturn() {
    let h2 = document.createElement("h2");
    h2.innerText = "DOM DOM DOM DOM DOM";
    return h2;
  }

  render() {
    let litHtmlReturn = html`
      <h1>${this.greeting}</h1>
    `;
    return [litHtmlReturn, this.primitiveReturn, this.domReturn()];
  }
}

customElements.define('my-element', MyElement);
