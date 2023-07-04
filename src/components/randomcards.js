import React, { Component } from "react";
import spencer from "../images/spencer.jpeg";
import jayd from "../images/jay-d.jpeg";
import nibble from "../images/nibble.jpeg";
import stembox from "../images/Stembox-studio-1-2.jpg";
import ClockStar from "../images/ori-stem-box-circuitmess-clockstar-3100.jpg";
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
            "Suspendisse ultrices feugiat quam, volutpat iaculis enim fringilla ac. Suspendisse tortor eli",
          price: "kn613.99",
          discountPrice: "kn442.99",
          discountText: "Limited 20% discount",
          ages: "12+",
        },
        {
          id: 2,
          image: jayd,
          title: "JayD",
          description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
          price: "kn856.99",
          discountPrice: "kn1,027.99",
          discountText: "Limited 15% discount",
          ages: "11+",
        },
        {
          id: 3,
          image: nibble,
          title: "Nibble",
          description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
          price: "kn542.99",
          discountPrice: "kn413.99",
          discountText: "Limited 20% discount",
          ages: "11+",
        },
        {
          id: 4,
          image: stembox,
          title: "Stembox",
          description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
          price: "kn442.99",
          discountPrice: "kn313.99",
          discountText: "Limited 20% discount",
          ages: "11+",
        },
        {
          id: 5,
          image: ClockStar,
          title: "ClockStar",
          description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
          price: "kn342.99",
          discountPrice: "kn213.99",
          discountText: "Limited 20% discount",
          ages: "11+",
        },
      ],
      newCards: [], // stanje za prikazivanje novih kartica
      loading: false, // stanje za prikazivanje loadera
    };
  }

  handleNewCards = () => {
    const { newCards, loading } = this.state;

    if (loading) {
      return;
    }

    this.setState({ loading: true });

    setTimeout(() => {
      const randomCards = this.getRandomCards(3);
      this.setState({
        newCards: [...newCards, ...randomCards],
        loading: false,
      });
    }, 1000);
  };

  getRandomCards = (count) => {
    const { products } = this.state;
    const randomCards = [];
    while (randomCards.length < count) {
      const randomIndex = Math.floor(Math.random() * products.length);
      const randomProduct = products[randomIndex];
      if (!randomCards.some((card) => card.id === randomProduct.id)) {
        randomCards.push(randomProduct);
      }
    }
    return randomCards;
  };

  render() {
    const { newCards, loading } = this.state;

    const cardGroups = [];
    for (let i = 0; i < newCards.length; i += 3) {
      cardGroups.push(newCards.slice(i, i + 3));
    }

    return (
      <div>
        {/* Prikaz grupa kartica */}
        {cardGroups.map((group, index) => (
          <div className="layout-wrapper" key={index}>
            {group.map((product) => (
              <div className="card" key={product.id}>
                <div className="card-content">
                  <div className="card-image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="card-rest">
                    <div className="card-text-content">
                      <div
                        className={`product-basic-info ${product.title
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        <div className="content">
                          <p className="title">{product.title}</p>
                          <p className="description">{product.description}</p>
                          <span className="price discount">
                            {product.discountPrice}
                          </span>{" "}
                          <span className="price">{product.price}</span>{" "}
                          <span className="price text-discount">
                            {product.discountText}
                          </span>
                          <div className="spacing"></div>
                        </div>
                        <div
                          className={`flex-parent-button ${product.title
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          <a href="#">Shop now</a>
                          <div className="ages">
                            <p>
                              AGES <br /> <span>{product.ages}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Gumb za prikaz novih kartica */}
        <div className="button-container">
          <button
            onClick={this.handleNewCards}
            className="button"
            disabled={loading}
          >
            {loading ? "Loading..." : "Show more"}
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
