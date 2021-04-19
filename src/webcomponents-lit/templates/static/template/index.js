import { LitElement, html } from 'lit-element';

class <%= participantNameFiltered %>Component extends LitElement {
  static get properties() {
    return {
      counter: {
        type: Number,
        reflect: true,
      }
    }
  }

  constructor() {
    super();
    this.counter = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.counterInterval = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.counterInterval);
  }

  render() {
    return html`
      <h2>Hello, <%= participantNameFiltered %>! :)</h2>
      <p>This component has been live for ${this.counter} seconds</p>
    `;
  }
}

customElements.define('<%= participantNameLowercase %>-component', <%= participantNameFiltered %>Component);

export default `<<%= participantNameLowercase %>-component></<%= participantNameLowercase %>-component>`;
