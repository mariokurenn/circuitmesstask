import React, { Component } from "react";
import spencer from "../images/spencer.jpeg";
import jayd from "../images/jay-d.jpeg";
import nibble from "../images/nibble.jpeg";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: spencer,
          title: "Spencer",
          description:
            "A DIY voice assistant that talks, lights up, and understands voice commands",
          price: "kn813.99",
          discountPrice: "kn642.99",
          discountText: "Limited 20% discount",
          ages: "11+",
        },
        {
          id: 2,
          image: jayd,
          title: "Jay-D",
          description:
            "Build & code your own DJ mixer. Suspendisse tortor eli. Suspendisse tortor eli.",
          price: "kn856.99",
          discountPrice: "kn1,027.99",
          discountText: "Limited 15% discount",
          ages: "11+",
        },
        {
          id: 3,
          image: nibble,
          title: "Nibble",
          description: "Build & code your very own retro game console",
          price: "kn642.99",
          discountPrice: "kn513.99",
          discountText: "Limited 20% discount",
          ages: "11+",
        },
      ],

      showNewCards: false,
    };
  }

  handleNewCards = () => {
    this.setState({ showNewCards: true });
  };
  render() {
    const { products, showNewCards } = this.state;

    return (
      <div className="layout-wrapper">
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <img src={products[0].image} alt={products[0].title} />
            </div>
            <div className="card-rest">
              <div className="card-text-content">
                <div className="product-basic-info spencer">
                  <div className="content">
                    <p className="title">{products[0].title}</p>
                    <p className="description">{products[0].description}</p>
                    <span className="price discount">
                      {products[0].discountPrice}
                    </span>{" "}
                    <span className="price">{products[0].price}</span>{" "}
                    <p className="price text-discount">
                      {products[0].discountText}
                    </p>
                    <div className="spacing"></div>
                  </div>
                  <div className="flex-parent-button spencer">
                    <a href="#">Shop now</a>
                    <div className="ages">
                      <p>
                        AGES <br /> <span>{products[0].ages}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <img src={products[1].image} alt={products[1].title} />
            </div>
            <div className="card-rest">
              <div className="card-text-content">
                <div className="product-basic-info jayd">
                  <div className="content">
                    <p className="title">{products[1].title}</p>
                    <p className="description">{products[1].description}</p>
                    <span className="price">{products[1].price}</span>{" "}
                    <span className="price discount">
                      {products[1].discountPrice}
                    </span>
                    <br />
                    <p className="price text-discount">
                      {products[1].discountText}
                    </p>
                    <div className="spacing"></div>
                  </div>
                  <div className="flex-parent-button jayd">
                    <a href="#">Shop now</a>
                    <div className="ages">
                      <p>
                        AGES <br /> <span>{products[1].ages}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <img src={products[2].image} alt={products[2].title} />
            </div>
            <div className="card-rest">
              <div className="card-text-content">
                <div
                  className={`product-basic-info ${products[2].title
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <div className="content">
                    <p className="title">{products[2].title}</p>
                    <p className="description">{products[2].description}</p>
                    <br />
                    <span className="price discount">
                      {products[2].discountPrice}
                    </span>{" "}
                    <span className="price">{products[2].price}</span>{" "}
                    <p className="price text-discount">
                      {products[2].discountText}
                    </p>
                    <div className="spacing"></div>
                  </div>
                  <div className="flex-parent-button nibble">
                    <a href="#">Shop now</a>
                    <div className="ages">
                      <p>
                        AGES <br /> <span>{products[2].ages}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
