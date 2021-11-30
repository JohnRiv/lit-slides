import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      greeting: { type: String, reflect: true },
      isChecked: { type: Boolean, reflect: true },
      age: { type: Number, reflect: true },
      names: { type: Array, reflect: true },
      person: { type: Object, reflect: true }
    }
  }

  constructor() {
    super(); // always call super first in the constructor
    this.greeting = "hello world!";
    this.isChecked = true;
    this.age = 25;
    this.names = ['Steven', 'Tom'];
    this.person = { name: 'John', age: 60 };
  }

  render() {
    return html`
      <h1>${this.greeting}</h1>
      <input type="checkbox" .checked=${this.isChecked}></input>
      <h2>this is a number: ${this.age}</h2>
      ${this.names.map(name => html`<h2>${name}</h2>`)}
      <h3>${this.person.name} is ${this.person.age} years old</h3>
    `;
  }
}

customElements.define('my-element', MyElement);
