import { LitElement, html, css } from "lit-element";
import "./mv-tooltip.js";
import "mv-font-awesome";
import "mv-container";

export class MvTooltipDemo extends LitElement {
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
   `;
  }

  render() {
    return html`
    <div>
      <div class="container">
        <mv-container>
          <h3>Small-Dark</h3>
          <div class="tooltip">
            <mv-tooltip position="top">
              <a class="demo-tip">Top</a>
              <div slot="tooltip-content">Top</div>
            </mv-tooltip>
          </div>
          
          <div class="right-left-tooltip">
            <mv-tooltip position="left">
              <a class="demo-tip">Left</a>
              <div slot="tooltip-content">Left</div>
            </mv-tooltip>
            <mv-tooltip position="right">
              <a class="demo-tip">Right</a>
              <div slot="tooltip-content">Right</div>
            </mv-tooltip>
          </div>
          
          <div class="tooltip">
            <mv-tooltip position="bottom">
              <a class="demo-tip">Bottom</a>
              <div slot="tooltip-content">Bottom</div>
            </mv-tooltip>
          </div>
          <div class="tooltip">
            <mv-tooltip clickable position="bottom">
              <a class="demo-tip">OnClick</a>
              <div slot="tooltip-content">Click</div>
            </mv-tooltip>
          </div>
        </mv-container>
      </div>
      
      <div class="container">
        <mv-container>
          <h3>Small-Light</h3>
          <div class="tooltip">
            <mv-tooltip position="top" theme="light">
              <a class="demo-tip">Top</a>
              <div slot="tooltip-content">Top</div>
            </mv-tooltip>
          </div>
          
          <div class="right-left-tooltip">
            <mv-tooltip position="left" theme="light">
              <a class="demo-tip">Left</a>
              <div slot="tooltip-content">Left</div>
            </mv-tooltip>
            <mv-tooltip position="right" theme="light">
              <a class="demo-tip">Right</a>
              <div slot="tooltip-content">Right</div>
            </mv-tooltip>
          </div>
          
          <div class="tooltip">
            <mv-tooltip position="bottom" theme="light">
              <a class="demo-tip">Bottom</a>
              <div slot="tooltip-content">Bottom</div>
            </mv-tooltip>
          </div>
          <div class="tooltip">
            <mv-tooltip clickable position="bottom" theme="light">
              <a class="demo-tip">OnClick</a>
              <div slot="tooltip-content">Click</div>
            </mv-tooltip>
          </div>
        </mv-container>
      </div>
      
      <div class="container">
        <mv-container>
          <h3>Large-Dark</h3>
          <div class="tooltip">
            <mv-tooltip position="top" size="large">
              <a class="demo-tip">Top</a>
              <div slot="tooltip-content">Top</div>
            </mv-tooltip>
          </div>
          
          <div class="right-left-tooltip" size="large">
            <mv-tooltip position="left" size="large">
              <a class="demo-tip">Left</a>
              <div slot="tooltip-content">Left</div>
            </mv-tooltip>
            <mv-tooltip position="right" size="large">
              <a class="demo-tip">Right</a>
              <div slot="tooltip-content">Right</div>
            </mv-tooltip>
          </div>
          
          <div class="tooltip">
            <mv-tooltip position="bottom" size="large">
              <a class="demo-tip">Bottom</a>
              <div slot="tooltip-content">Bottom</div>
            </mv-tooltip>
          </div>
          <div class="tooltip">
            <mv-tooltip clickable position="bottom" size="large">
              <a class="demo-tip">OnClick</a>
              <div slot="tooltip-content">Click</div>
            </mv-tooltip>
          </div>
        </mv-container>
      </div>
      
      <div class="container">
        <mv-container>
          <h3>Large-Light</h3>
          <div class="tooltip">
            <mv-tooltip position="top" size="large" theme="light">
              <a class="demo-tip">Top</a>
              <div slot="tooltip-content">Top</div>
            </mv-tooltip>
          </div>
          
          <div class="right-left-tooltip">
            <mv-tooltip position="left" size="large" theme="light">
              <a class="demo-tip">Left</a>
              <div slot="tooltip-content">Left</div>
            </mv-tooltip>
            <mv-tooltip position="right" size="large" theme="light">
              <a class="demo-tip">Right</a>
              <div slot="tooltip-content">Right</div>
            </mv-tooltip>
          </div>
          
          <div class="tooltip">
            <mv-tooltip position="bottom" size="large" theme="light">
              <a class="demo-tip">Bottom</a>
              <div slot="tooltip-content">Bottom</div>
            </mv-tooltip>
          </div>
          <div class="tooltip">
            <mv-tooltip clickable position="bottom" size="large" theme="light">
              <a class="demo-tip">OnClick</a>
              <div slot="tooltip-content">Click</div>
            </mv-tooltip>
          </div>
        </mv-container>
      </div>
      
      <div class="container">
        <mv-container>
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
}

customElements.define("mv-tooltip-demo", MvTooltipDemo);
