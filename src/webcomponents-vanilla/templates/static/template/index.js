class <%= participantNameFiltered %>Component extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<h2>Hello, <%= participantNameFiltered %>! :)</h2>';
  }
}

customElements.define('<%= participantNameLowercase %>-component', <%= participantNameFiltered %>Component);

export default `<<%= participantNameLowercase %>-component></<%= participantNameLowercase %>-component>`;
