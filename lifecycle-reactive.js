import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static get properties() {
    return {
      opened: {
        type: Boolean
      }
    }
  }

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

  // Called to determine whether an update cycle is required.
  shouldUpdate(changedProperties) {
    console.log('shouldUpdate', changedProperties);
    return true; // default value. Without this, the update stops.
  }

  // Implement willUpdate() to compute property values that depend on other properties and are used in the rest of the update process.
  willUpdate(changedProperties) {
    console.log('willUpdate', changedProperties);

    this.updateComplete.then(() => {
      console.log("updateComplete resolved ------------------------------------------");
    }).catch(err => {
      console.log("updateComplete rejected", err);
    })
  }

  // Called by update() and should be implemented to return a renderable result (i.e. use lit-html) used to render the component's DOM.
  render() {
    console.log('render');
    return html`
      <h1>Reactive Lifecycle events with Lit</h1>
      <p>In addition to the standard custom element lifecycle, Lit components also implement a <strong>reactive</strong> update cycle.</p>
      <p>The reactive update cycle is triggered when either:</p>
      <ul>
        <li>a reactive property changes</li>
        <li>when the <code>requestUpdate()</code> method is explicitly called</li>
      </ul>
      <p>Lit performs updates asynchronously so property changes are batched — if more properties change after an update is requested, but before the update starts, all of the changes are captured in the same update.</p>
    `;
  }

  // Called after the component's DOM has been updated the first time, immediately before updated() is called.
  firstUpdated(changedProperties) {
    console.log('first updated', changedProperties);
  }

  // Called whenever the component’s update finishes and the element's DOM has been updated and rendered.
  updated(changedProperties) {
    console.log('updated', changedProperties);
  }

  // Invoked when a component is removed from the document's DOM.
  disconnectedCallback() {
    super.disconnectedCallback(); // this is a standard Custom Element lifecycle event, so call super
    console.log('disconnected');
    // this is a good time to clean up event listeners you added in the connectedCallback
  }
}

customElements.define('my-element', MyElement);
