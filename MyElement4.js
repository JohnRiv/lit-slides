import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static get properties() {
    return {
      myBool: { type: Boolean },
      myObject: { type: Object }
    }
  }

  constructor() {
    super(); // always call super first in the constructor
    this.myBool = false;
    this.myObject = { clicked: false, text: "Im an object!" };
  }

  render() {
    return html`
      <!-- Will rerender (property) -->
      <button @click=${() => this.myBool = !this.myBool}>
        ${this.myBool}
      </button>

      <!-- Will rerender (replace the object) -->
      <button @click=${() => this.myObject = { ...this.myObject, clicked: !this.myObject.clicked}}>
        ${this.myObject.clicked}
      </button>

      <!-- essentially shorthand for Object.assign({}, this.myObject, {clicked: !this.myObject.clicked}) -->
    `;
  }
}

customElements.define('my-element', MyElement);
