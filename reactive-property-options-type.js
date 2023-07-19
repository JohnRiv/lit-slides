import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static properties = {
    greeting: { reflect: true, type: String },
    date: { reflect: true, type: Number }, // ¯\_(ツ)_/¯
    isChecked: { reflect: true, attribute: "is-checked", type: Boolean },
    age: { reflect: true, type: Number },
    names: { reflect: true, type: Array },
    person: { reflect: true, type: Object }
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
      <input type="checkbox" ?checked=${this.isChecked}></input>
      <h2>this is a number: ${this.age}</h2>
      ${this.names.map(name => html`<h2>${name}</h2>`)}
      <h3>${this.person.name} is ${this.person.age} years old</h3>
    `;
  }
}

customElements.define('my-element', MyElement);
