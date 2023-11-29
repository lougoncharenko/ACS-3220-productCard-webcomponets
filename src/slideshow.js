import { css, html, LitElement } from "lit";

class SlideShow extends LitElement {
  static get properties() {
    return {
      photos: { type: Array },
      time: { type: Number },
      transition: { type: Number },
      width: { type: Number },
      height: { type: Number }
    };
  }

  constructor() {
    super();
    this.width = 300
    this.height = 400
    this.time = 3000
    this.transition = 300
    this.photos = [
      {
        imgSrc:
          "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png",
        imgAlt: "default image",
      },
      {
        imgSrc:
          "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png",
        imgAlt: "default image",
      },
      {
        imgSrc:
          "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png",
        imgAlt: "default image",
      },
    ];
  }

  render() {
    return html` ${this.photos.map(
      (photo) =>
        html`<div class="slide-show-container">
          <img
            class="mySlides fade"
            src=${photo.imgSrc}
            alt=${photo.imgAlt}
            width="400"
            height="300"
          />
        </div>`
    )}`;
  }


  static get styles() {
    return css`
     ` }
}

customElements.define("slide-show", SlideShow);
