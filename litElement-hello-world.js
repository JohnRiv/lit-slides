import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static properties = {
    greeting: { }
  }

  constructor() {
    super(); // always call super first in the constructor
    this.greeting = "hello world!"; // defaults set in the constructor
  }

  render() {
    return html`
      <h1>${this.greeting}</h1>
    `;
  }
}

customElements.define('my-element', MyElement);
