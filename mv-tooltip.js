import { LitElement, html, css } from "lit-element";
import "mv-font-awesome";
import "mv-container";

export class MvTooltip extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      position: { type: String },
      clickAble : { type: Boolean },
      open: { type: Boolean },
      theme: { type: String, attribute: true },
      size: { type: String, attribute: true },
      showCloseButton: { type: Boolean }
    };
  }

  static styles = css`
    :host {
      font-family: var(--font-family, Arial);
      font-size: var(--font-size-m, 10pt);
    }
      
    .tooltip {
      position: relative;
      z-index: unset;
      display: inline-block;
    }

    .mv-tooltip-container {
      color: while;
      line-height: 2;
      display: none;
      position: absolute;
      z-index: 9999;
      cursor: context-menu;
      width: var(--mv-tooltip-width, 93px);
      min-height: var(--mv-tooltip-height, 39px);
      box-shadow: 0 0px 25px 5px rgba(205,210,214,0.8);
      border-radius: 5px;
    }
    
    .mv-tooltip-container::after {
      content: "";
      height: 10px;
      position: absolute;
      transform: rotate(45deg);
      width: 10px;
      background: var(--mv-tooltip-background, #363F4C);
      box-shadow: 0 0px 25px 5px rgba(205,210,214,0.8);
    }
    
    .tooltip-popup {
      text-align: center;
      position: relative;
      z-index: 2;
      border-radius: 5px;
      background: var(--mv-tooltip-background, #363F4C);
      color:var(--mv-tooltip-color, #FFFFFF);
      min-height: var(--mv-tooltip-height, 39px);
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
    }
    
    .mv-tooltip-container-bottom {
      top: calc(100% + 16px);
      left: 50%;
      transform: translateX(-50%);
    }

    .mv-tooltip-container-bottom::after {
      top: -5px;
      left: 50%;
      margin-left: -5px;
    }

    .mv-tooltip-container-top {
      bottom: calc(100% + 16px);
      left: 50%;
      transform: translateX(-50%);
    }

    .mv-tooltip-container-top::after {
      bottom: -5px;
      left: 50%;
      margin-left: -5px;
    }

    .mv-tooltip-container-left {
      right: calc(100% + 24px);
      top: 50%;
      transform: translateY(-50%);
    }

    .mv-tooltip-container-left::after {
      right: -5px;
      margin-top: -5px;
      top: 50%;
    }

    .mv-tooltip-container-right {
      left: calc(100% + 24px);
      top: 50%;
      transform: translateY(-50%);
    }

    .mv-tooltip-container-right::after {
      left: -5px;
      margin-top: -5px;
      top: 50%;
    }

    .tooltip-trigger {
      display: inline-block;
      position: relative;
      z-index: 1;
    }

    .tooltip-title {
      font-size: var(--mv-tooltip-title-font-size, 20px);
      color:var(--mv-tooltip-color, #FFFFFF);
      font-weight: 500;
    }

    .tooltip-actived .mv-tooltip-container {
      display: block;
    }
    
    mv-fa {
      position: absolute;
      right: 0px;
      top: -9px;
      font-size: 15px;
      color:var(--mv-tooltip-color, #FFFFFF);
      cursor: pointer;
    }
    
    .mv-tooltip-container.light::after {
      background: #FFFFFF;
    }
    
    .mv-tooltip-container.light > .tooltip-popup {
      background: #FFFFFF;
      color:#363F4C;
    }
    
    span > ::slotted(*) { 
      cursor: pointer;
    }
    
    .mv-tooltip-container.large {
      width: 163px;
      min-height: 46px;
    }
    
    .mv-tooltip-container.large > .tooltip-popup {
      min-height: 46px;
    }
    
    .mv-tooltip-container.light mv-fa {
      color:#363F4C;
    }
 `;

  constructor() {
    super();
    this.position = 'bottom';
    this.open = false;
    this.theme = "dark";
    this.size = "small";
    this.title = null;
    this.showCloseButton = false;
  }

  render() {
    const open = this.open ? 'tooltip tooltip-actived' : 'tooltip';
    return html`
      <span class="${open}">
        <div class="mv-tooltip-container mv-tooltip-container-${this.position} ${this.theme} ${this.size}">
          <div class="tooltip-popup">
          ${this.clickAble && this.showCloseButton
            ? html`<mv-fa icon="window-close" @click="${this.hideTooltip}"></mv-fa>`
            : html``}
          ${this.title
            ? html`<div class="tooltip-title">${this.title}</div>`
            : html``}
            <slot name="tooltip-content"></slot>
          </div>
        </div>
        <span 
          class="tooltip-trigger"
          @mouseover="${this.showTooltip}"
          @mouseout="${!this.clickAble ? this.hideTooltip : null}"
          @click="${this.toggleTooltip}"
          >
          <slot></slot>
        </span>
      </span>
    `;
  }

  connectedCallback() {
    document.addEventListener("click", this.handleClickTooltip);
    super.connectedCallback();
  }

  detachedCallback() {
    document.removeEventListener("click", this.handleClickTooltip);
    super.detachedCallback();
  }

  handleClickTooltip = event => {
    const { path } = event;
    const clickedTooltip = !(path || []).some(node => node === this);
    if (clickedTooltip) {
      this.open = false;
    }
  };

  hideTooltip() {
    this.open = false;
  }

  showTooltip() {
    if (!this.clickAble) {
      this.open = true;
    }
  }

  toggleTooltip() {
    if (this.clickAble) {
      this.open = !this.open;
    }
  }
}

customElements.define("mv-tooltip", MvTooltip);
