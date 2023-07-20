import {LitElement, html, css} from 'lit';

import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

/*
Adapted from https://lit.dev/playground/#sample=examples/directive-class-map
and https://lit.dev/playground/#sample=examples/directive-style-map
*/

export class MyElement extends LitElement {
  static properties = {
    enabled: {type: Boolean},
    hidden: {type: Boolean},
  };

  // Standard Lit way of applying styles, used by classMap in this example
  static styles = css`
    .enabled {
      background: lightgreen;
    }
    .hidden {
      opacity: 0.2;
    }
    .padded {
      padding: 10px;
    }
  `;

  constructor() {
    super();
    this.enabled = true;
    this.hidden = false;
  }

  render() {
    const classesForClassMap = {
      enabled: this.enabled,
      hidden: this.hidden,
      padded: true,
    };
    const stylesForStyleMap = {
      backgroundColor: this.enabled ? 'lightgreen' : 'transparent',
      opacity: this.hidden ? '0.2' : '1',
      padding: '10px',
    };
    return html`
      <h3>classMap directive example</h3>
      <div class=${classMap(classesForClassMap)}>Classy text</div>
      <hr>
      <h3>styleMap directive example</h3>
      <p style=${styleMap(stylesForStyleMap)}>Hello style!</p>
      <hr>
      <label>
        <input type="checkbox" .checked=${this.enabled} @change=${this.toggleEnabled}>
        Enabled
      </label>
      <label>
        <input type="checkbox" .checked=${this.hidden} @change=${this.toggleHidden}>
        Hidden
      </label>
    `;
  }

  toggleEnabled() {
    this.enabled = !this.enabled;
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }
}
customElements.define('my-element', MyElement);
