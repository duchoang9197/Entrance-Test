import { getAPI, shuffleArray } from "../Utilities.js";
import Answer from "./Answer.js";

const $template = document.createElement("template");

$template.innerHTML = /*html*/ `
    <div id=quiz>
        <div id=question>This is a question</div>
        <div id=answers>
        
        </div>
    </div>
`;

export default class Quiz extends HTMLElement {
  constructor(data) {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$quiz = this.shadowRoot.getElementById("quiz");
    this.$question = this.shadowRoot.getElementById("question");
    this.$answers = this.shadowRoot.getElementById("answers");

    this.setAttribute("data", data);
  }

  static get observedAttributes() {
    return ["data"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "data") {
      const data = JSON.parse(newValue);
      this.$question.innerHTML = data.question;
      const answers = data.incorrect_answers;
      answers.push(data.correct_answer);
      shuffleArray(answers);

      for (let answer of answers) {
        if (answer != data.correct_answer) {
          let html = new Answer(answer, false);
          console.log(html);
          this.$answers.appendChild(html);
        } else {
          let html = new Answer(answer, true);
          console.log(html);
          this.$answers.appendChild(html);
        }
      }
    }
  }
}

window.customElements.define("quiz-wrapper", Quiz);