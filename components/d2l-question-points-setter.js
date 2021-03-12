import { css, html, LitElement } from 'lit-element/lit-element.js';

class QuestionPointsSetter extends LitElement {
	static get properties() {
		return {
		};
	}
	render() {
		return html`<a href="https://google.ca/">Hello World</a>`;
	}
}

customElements.define('d2l-question-points-setter', QuestionPointsSetter);