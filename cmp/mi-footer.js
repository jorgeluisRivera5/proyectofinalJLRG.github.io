class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Jorge Luis Rivera Galicia.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
