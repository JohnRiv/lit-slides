import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static get properties() {
    return {
      opened: { type: Boolean }
    }
  }

  constructor() {
    super(); // always call super first in the constructor
    console.log('constructed');
    this.opened = false;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('connected');
  }

  firstUpdated(changedProps) {
    console.log('first updated', changedProps);
  }

  updated(changedProps) {
    console.log('updated', changedProps);
    if (changedProps.has('opened')) {
      this._onOpenedChanged();
    }
  }

  disconnectedCallback() {
    console.log('disconnected');
  }

  render() {
    console.log('render');
    return html``;
  }

  _onOpenedChanged() {
    console.log('onOpenChanged');
  }
}

customElements.define('my-element', MyElement);
