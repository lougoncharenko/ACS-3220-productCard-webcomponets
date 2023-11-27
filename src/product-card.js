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
        this.imgSrc = "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";
        this.imgAlt = "Default product description";
        this.heading = "Default product heading"
        this.description = "This is a default product. Please add your own product image, alt tag, heading, description and link"
        this.link = 'randomlink'
      }

      render() {
        return html`
        <div class=product-card>
        <img src=${this.imgSrc} alt=${this.imgAlt} width="500" height="600"> 
        <h1> ${this.heading}</h1>
        <p>${this.description}</p>
        

        </div>`
      }

}

customElements.define("product-card", ProductCard);