import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      greeting: { reflect: true },
      isChecked: { reflect: true },
      age: { reflect: true },
      names: { reflect: true },
      person: { reflect: true }
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
