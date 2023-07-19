import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  // Called when element is created
  // Invoked when an existing element is upgraded (the definition for a custom element is loaded after the element is already in the DOM)
  constructor() {
    super(); // always call super first in the constructor
    console.log('constructed');
    this.opened = false; // default property value
  }

  // Invoked when a component is added to the document's DOM.
  connectedCallback() {
    super.connectedCallback(); // this is a standard Custom Element lifecycle event, so call super
    console.log('connected');
    // this is a good time to add event listeners that you don't add declaratively in the template
  }

  // Invoked when a component is removed from the document's DOM.
  disconnectedCallback() {
    super.disconnectedCallback(); // this is a standard Custom Element lifecycle event, so call super
    console.log('disconnected');
    // this is a good time to clean up event listeners you added in the connectedCallback
  }

  render() {
    return html`<h1>Standard Custom Element Lifecycle events with Lit</h1>`;
  }
}

customElements.define('my-element', MyElement);
