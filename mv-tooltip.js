import { LitElement, html, css } from "lit-element";
import "mv-font-awesome";
import "mv-click-away";

export class MvTooltip extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      clickable: { type: Boolean },
      open: { type: Boolean },
      closeable: { type: Boolean },
      noAutoClose: { type: Boolean, attribute: "no-auto-close", reflect: true },

      //  valid position values are: "top", "right, "left"
      //    default: "bottom"
      position: { type: String },

      //  valid theme values are: "light"
      //    default: "dark"
      theme: { type: String, attribute: true },

      //  valid size values are: "large"
      //    default: "small"
      size: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        --mv-tooltip-font-family: var(--font-family, MuseoSans);
        --mv-tooltip-content-font-size: var(--font-size-m, 0.8125rem);
        --mv-tooltip-title-font-size: var(--font-size-l, 1.125rem);
        --mv-close-button-font-size: var(--font-size-l, 1.125rem);
        --min-height: var(--mv-tooltip-height, 29px);
        --border-radius: var(--mv-tooltip-border-radius, 5px);
        --background-color: var(--mv-tooltip-background, #363f4c);
        --text-color: var(--mv-tooltip-color, #ffffff);
        --light-background: var(--mv-tooltip-light-background);
        --light-color: var(--mv-tooltip-light-color);
        --border: 1px solid var(--mv-tooltip-border);
      }

      @-webkit-keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
      }

      @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity:1 ;}
      }

      .tooltip {
        position: relative;
        z-index: unset;
        display: inline-block;
      }

      .mv-tooltip-container {
        color: #ffffff;
        position: absolute;
        visibility: hidden;
        z-index: 9999;
        cursor: context-menu;
        max-width: var(--mv-tooltip-width, 500px);
        min-width: var(--mv-tooltip-min-width, 93px);
        width: var(--mv-tooltip-width);
        min-height: var(--min-height);
        box-shadow: 0 0px 25px 5px rgba(205, 210, 214, 0.8);
        border-radius: var(--border-radius);
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        width: max-content;
        border: var(--border);
      }

      .mv-tooltip-container::after {
        content: "";
        height: 10px;
        position: absolute;
        transform: rotate(45deg);
        width: 10px;
        background: var(--background-color);
        box-shadow: 0 0px 25px 5px rgba(205, 210, 214, 0.8);
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border: var(--border);
      }

      .tooltip-popup {
        text-align: center;
        position: relative;
        z-index: 2;
        border-radius: var(--border-radius);
        background: var(--background-color);
        color: var(--text-color);
        min-height: var(--min-height);
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
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
        font-family: var(--mv-tooltip-font-family);
        font-size: var(--mv-tooltip-title-font-size);
        color: var(--text-color);
        font-weight: 500;
      }

      .active .mv-tooltip-container {
        visibility: visible;
        -webkit-animation: fadeIn 0.3s;
        animation: fadeIn 0.3s;
      }

      mv-fa {
        position: absolute;
        right: 5px;
        top: 0;
        font-size: var(--mv-close-button-font-size);
        color: var(--text-color);
        cursor: pointer;
      }

      .mv-tooltip-container.light::after {
        background: var(--light-background, #ffffff);
      }

      .mv-tooltip-container.light > .tooltip-popup {
        background: var(--light-background, #ffffff);
        color: var(--light-color, #363f4c);
      }

      span > ::slotted(*) {
        cursor: pointer;
      }

      .content ::slotted(*) {
        max-width: 500px;
        overflow-wrap: break-word;        
        padding: 8px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        font-family: var(--mv-tooltip-font-family);
        font-size: var(--mv-tooltip-content-font-size);
        font-weight: 100;
      }

      .mv-tooltip-container.large {
        min-width: 163px;
        min-height: 46px;
      }

      .mv-tooltip-container.large > .tooltip-popup {
        min-height: 46px;
      }

      .mv-tooltip-container.light mv-fa {
        color: #363f4c;
      }
    `;
  }

  constructor() {
    super();
    this.position = "bottom";
    this.open = false;
    this.theme = "dark";
    this.size = "small";
    this.title = null;
    this.closeable = false;
    this.noAutoClose = false;
  }

  render() {
    const activeClass = this.open ? " active": "";
    const tooltipPosition = `mv-tooltip-container-${this.position}`;
    const tooltipClass = `${tooltipPosition} ${this.theme} ${this.size}`;
    return html`
      <mv-click-away @clicked-away="${this.handleClickAway}">
        <span class="${`tooltip${activeClass}`}">
          <span class="mv-tooltip-container ${tooltipClass}">
            <span class="tooltip-popup">
              ${this.closeable && this.clickable
                ? html`
                    <slot name="close-button">
                      <mv-fa
                        icon="times"
                        @click="${this.toggleTooltip}"
                      ></mv-fa>
                    </slot>
                  `
                : html``}
              <div>
                ${this.title
                  ? html`
                      <slot name="title">
                        <div class="tooltip-title">${this.title}</div>
                      </slot>
                    `
                  : html``}
                <span class="content"
                  ><slot name="tooltip-content"></slot
                ></span>
              </div>
            </span>
          </span>
          <span
            class="tooltip-trigger"
            @mouseover="${this.showTooltip}"
            @mouseout="${this.hideTooltip}"
            @click="${this.toggleTooltip}"
          >
            <slot></slot>
          </span>
        </span>
      </mv-click-away>
    `;
  }

  dispatchToggleEvent = open => {
    this.dispatchEvent(new CustomEvent("tooltip-toggle", { detail: { open } }));
  };

  handleClickAway = () => {
    if (!this.noAutoClose) {
      this.open = false;
      this.dispatchToggleEvent(this.open);
    }
  };

  hideTooltip() {
    if (!this.clickable) {
      this.open = false;
      this.dispatchToggleEvent(this.open);
    }
  }

  showTooltip() {
    if (!this.clickable) {
      this.open = true;
      this.dispatchToggleEvent(this.open);
    }
  }

  toggleTooltip() {
    if (this.clickable) {
      this.open = !this.open;
      this.dispatchToggleEvent(this.open);
    }
  }
}

customElements.define("mv-tooltip", MvTooltip);
