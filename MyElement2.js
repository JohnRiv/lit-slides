import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      myFun: { type: Function, reflect: true } // <- not what you think
    }
  }

  constructor() {
    super(); // always call super first in the constructor
    this.myFun = () => true;
  }

  render() {
    return html`
      <h1></h1>
    `;
  }
}

customElements.define('my-element', MyElement);
