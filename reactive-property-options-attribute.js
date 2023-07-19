import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static properties = {
    greeting: { reflect: true, attribute: false },
    date: { reflect: true, attribute: false },
    isChecked: { reflect: true, attribute: "is-checked" },
    age: { reflect: true, attribute: false },
    names: { reflect: true },
    person: { reflect: true }
  }

  constructor() {
    super(); // always call super first in the constructor
    this.greeting = "hello world!";
    this.date = new Date();
    this.isChecked = false;
    this.age = 25;
    this.names = ['Steven', 'Tom'];
    this.person = { name: 'John', age: 26 };
  }

  render() {
    return html`
      <h1>${this.greeting}</h1>
      <h2>The current date is ${this.date.toLocaleDateString()}</h2>
      <input type="checkbox" .checked=${this.isChecked}></input>
      <h2>this is a number: ${this.age}</h2>
      ${this.names.map(name => html`<h2>${name}</h2>`)}
      <h3>${this.person.name} is ${this.person.age} years old</h3>
    `;
  }
}

customElements.define('my-element', MyElement);
