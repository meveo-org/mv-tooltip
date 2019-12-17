import { LitElement, html, css } from "lit-element";
import "./mv-tooltip.js";

export class MvTooltipDemo extends LitElement {

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
      
      .container {
        text-align: center;
        width: 100%;
        margin-top: 200px;
      }
   `;
  }

  render() {
    return html`
      <div class="container">
        <div>
          <mv-tooltip
            heading="This is Top"
            message="Tooltips display informative text when users hover over, focus on, or tap an element."
            tipwidth="320"
            position="top">
            <a class="btn">Popup Top</a>
          </mv-tooltip>
        </div>
        <div>
          <mv-tooltip
            heading="This is Left"
            message="Tooltips display informative text when users hover over, focus on, or tap an element."
            tipwidth="320"
            position="left">
            <a class="btn">Popup Left</a>
          </mv-tooltip>
        </div>
        <div>
          <mv-tooltip
            heading="This is Bottom"
            message="Tooltips display informative text when users hover over, focus on, or tap an element."
            tipwidth="320"
            position="bottom">
            <a class="btn">Popup Bottom</a>
          </mv-tooltip>
        </div>
        <div>
          <mv-tooltip
            heading="This is Right"
            message="Tooltips display informative text when users hover over, focus on, or tap an element."
            tipwidth="320"
            position="right">
            <a class="btn">Popup Right</a>
          </mv-tooltip>
        </div>
        <div>
          <mv-tooltip
            message="This tooltip happens on click."
            fireonclick
            tipwidth="270">
            <a class="btn">OnClick</a>
          </mv-tooltip>
        </div>
      </div>
    `;
  }
}

customElements.define("mv-tooltip-demo", MvTooltipDemo);
