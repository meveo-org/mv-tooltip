import { LitElement, html, css } from "lit";
import "@meveo-org/mv-font-awesome";
import "@meveo-org/mv-container";
import "./mv-tooltip.js";

export class MvTooltipDemo extends LitElement {
  static get properties() {
    return {
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
      
      .container {
        width: 100%;
        margin-top: 20px;
      } 
      
      .right-left-tooltip {
        display: grid;
        grid-template-columns: 50% 50%;
        text-align: center;
        margin-bottom: 30px;
      }
      
      .mv-container_direction {
        display: grid;
      }
      
      .tooltip {
        text-align: center;
        margin-bottom: 30px;
      }
      
      p {
        text-indent: 30px;
        text-align: initial;
        padding: 0px 10px 10px;
        margin: 0px;
      }
      
      .custom {
        --mv-tooltip-width: 300px;
        --mv-tooltip-background: #99ffff;
        --mv-tooltip-color: #ff33ff;
      }
      
      .demo-tip {
        text-transform: uppercase;
      }
      
      fieldset > label, label > input {
        cursor: pointer;
      }
      
      fieldset {
        width: 120px;
        margin-left: 10px;
        border:2px solid red;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;	
        border-radius: 8px;
        color: #818181;
        margin-bottom: 20px;
      }
      
      legend {
        font-weight: 500;
        color: red;
      }
   `;
  }

  constructor() {
    super();
    this.theme = "light";
  }

  render() {
    const { theme } = this;
    return html`
    <div>
      <div class="container">
        <fieldset>
          <legend>Theme</legend>
          <label><input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light</label>
          <label><input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark</label>
        </fieldset>
        <mv-container .theme="${theme}">
          <h3>Small</h3>
          <div class="tooltip">
            <mv-tooltip position="top" .theme="${theme}">
              <a class="demo-tip">Top</a>
              <div slot="tooltip-content">Top</div>
            </mv-tooltip>
          </div>
          
          <div class="right-left-tooltip">
            <mv-tooltip position="left" .theme="${theme}">
              <a class="demo-tip">Left</a>
              <div slot="tooltip-content">Left</div>
            </mv-tooltip>
            <mv-tooltip position="right" .theme="${theme}">
              <a class="demo-tip">Right</a>
              <div slot="tooltip-content">Right</div>
            </mv-tooltip>
          </div>
          
          <div class="tooltip">
            <mv-tooltip position="bottom" .theme="${theme}">
              <a class="demo-tip">Bottom</a>
              <div slot="tooltip-content">Bottom</div>
            </mv-tooltip>
          </div>
          <div class="tooltip">
            <mv-tooltip clickable position="bottom" .theme="${theme}">
              <a class="demo-tip">OnClick</a>
              <div slot="tooltip-content">Click</div>
            </mv-tooltip>
          </div>
        </mv-container>
      </div>
      
      <div class="container">
        <mv-container .theme="${theme}">
          <h3>Large</h3>
          <div class="tooltip">
            <mv-tooltip position="top" size="large" .theme="${theme}">
              <a class="demo-tip">Top</a>
              <div slot="tooltip-content">Top</div>
            </mv-tooltip>
          </div>
          
          <div class="right-left-tooltip" size="large">
            <mv-tooltip position="left" size="large" .theme="${theme}">
              <a class="demo-tip">Left</a>
              <div slot="tooltip-content">Left</div>
            </mv-tooltip>
            <mv-tooltip position="right" size="large" .theme="${theme}">
              <a class="demo-tip">Right</a>
              <div slot="tooltip-content">Right</div>
            </mv-tooltip>
          </div>
          
          <div class="tooltip">
            <mv-tooltip position="bottom" size="large" .theme="${theme}">
              <a class="demo-tip">Bottom</a>
              <div slot="tooltip-content">Bottom</div>
            </mv-tooltip>
          </div>
          <div class="tooltip">
            <mv-tooltip clickable position="bottom" size="large" .theme="${theme}">
              <a class="demo-tip">OnClick</a>
              <div slot="tooltip-content">Click</div>
            </mv-tooltip>
          </div>
        </mv-container>
      </div>
      
      <div class="container">
        <mv-container .theme="${theme}">
          <h3>Custom size and color</h3>
          <div class="tooltip">
            <mv-tooltip position="top" class="custom" title="Top">
              <a class="demo-tip">Top</a>
              <p slot="tooltip-content">Tooltips display informative text when users hover over, focus on, or tap an element.</p>
            </mv-tooltip>
          </div>
          
          <div class="right-left-tooltip">
            <mv-tooltip position="left" class="custom" title="Left">
              <a class="demo-tip">Left</a>
              <p slot="tooltip-content">Tooltips display informative text when users hover over, focus on, or tap an element.</p>
            </mv-tooltip>
            <mv-tooltip position="right" class="custom" title="Right">
              <a class="demo-tip">Right</a>
              <p slot="tooltip-content">Tooltips display informative text when users hover over, focus on, or tap an element.</p>
            </mv-tooltip>
          </div>
          
          <div class="tooltip">
            <mv-tooltip position="bottom" class="custom" title="Bottom">
              <a class="demo-tip">Bottom</a>
              <p slot="tooltip-content">Tooltips display informative text when users hover over, focus on, or tap an element.</p>
            </mv-tooltip>
          </div>
          <div class="tooltip">
            <mv-tooltip clickable position="bottom" class="custom" title="Click" closeable no-auto-close>
              <a class="demo-tip">OnClick</a>
              <p slot="tooltip-content">Tooltips display informative text when users hover over, focus on, or tap an element.</p>
            </mv-tooltip>
          </div>
        </mv-container>
      </div>
    </div>
    `;
  }

  changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-tooltip-demo", MvTooltipDemo);
