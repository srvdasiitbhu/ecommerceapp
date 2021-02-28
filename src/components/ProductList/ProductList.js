import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Typewriter from "./Typewriter.png";
import Shoes from "./Shoes.png";
import Cat from "./Cat.png";
import Plugs from "./Plugs.png";
import Lotion from "./Lotion.png";
import PrototypicItem from "./PrototypicItem.png";
import Pants from "./Pants.png";
import Envelop from "./Envelop.png";
import Cup from "./Cup.png";
import Bonsai from "./Bonsai.png";
import Nailpolish from "./Nailpolish.png";
import Brush from "./Brush.png";
import "./ProductList.css";

const ProductList = () => {
  const imageRef = React.createRef();
  return (
    <div>
      <div class="card" style={{ width: 952 }}>
        <div style={{ display: "inline-flex" }}>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={Typewriter}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">
                Vintage Typewriter to post awesome stories.
              </p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={Shoes}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">Lee Pucker Design.</p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={Cat}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">
                Time saving kitten to save months on development.
              </p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={Plugs}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">Plastic useless plugs and tubes.</p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={Lotion}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">Creativity stimulating lotion.</p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={PrototypicItem}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">
                Prototyping items to create a lot if useless things...
              </p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={Pants}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">John Von Ebalkin SPRINGS</p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={Envelop}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">Envelopes</p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={Cup}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">Professional teadrinking set</p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={Bonsai}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">One string Bonsai description</p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={Nailpolish}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">
                Simply best item in town to shine bright with your Nine inch
                nails
              </p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
          <div class="card" style={{ width: 238 }}>
            <img
              class="card-img-top"
              src={Brush}
              alt="Card image"
              style={{ width: 200 }}
            />
            <div class="card-body">
              <p class="description">
                KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is
                here!
              </p>
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductList);
