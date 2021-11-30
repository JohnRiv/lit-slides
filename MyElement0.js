import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      greeting: { type: String }
    }
  }

  constructor() {
    super(); // always call super first in the constructor
    this.greeting = "hello world!";
  }

  render() {
    return html`
      <h1>${this.greeting}</h1>
    `;
  }
}

customElements.define('my-element', MyElement);
