import { css, html, LitElement } from "lit";

class ProductCard extends LitElement {
  static get properties() {
    return {
      imgSrc: { type: String },
      imgAlt: { type: String },
      heading: { type: String },
      description: { type: String },
      link: { type: String },
    };
  }

  constructor() {
    super();
    this.imgSrc =
      "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";
    this.imgAlt = "Default product description";
    this.heading = "Default product heading";
    this.description =
      "This is a default product. Please add your own product image, alt tag, heading, description and product link.";
    this.link = "randomlink";

  }

  render() {
    return html` <div class="product-card">
      <img src=${this.imgSrc} alt=${this.imgAlt} width="400" height="300" />
      <h1>${this.heading}</h1>
      <p>${this.description}</p>
      <a href=${this.link}><button>Click for details</button></a>
    </div>`;
  }

  static get styles() {
    return css`
      .product-card {
        margin: 10px;
        border: black solid 1px;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        width: 400px;
      }

      h1 {
        font-family: Helvetica;
        padding: 0rem 1rem;
      }

      p{
        padding: 0rem 1rem;
        line-height: 1.5;
      }
      button {
        border: none;
        background-color: grey;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        margin: 0.5rem 0;
        height: calc(2rem + 5px);
      }
    `;
  }
}

customElements.define("product-card", ProductCard);
