import React from "react";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Chip from "@material-ui/core/Chip";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
  return (
    <div>
      <div class="card" style={{ width: 952 }}>
        <br />
        <FormControl variant="outlined" style={{ paddingRight: 800 }}>
          <InputLabel htmlFor="outlined-age-native-simple">SORT BY</InputLabel>
          <Select
            native
            label="SORT BY"
            inputProps={{
              name: "sortby",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option>Newest first</option>
            <option>Oldest first</option>
          </Select>
        </FormControl>
        <br />
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
              <br />
              <span className="price">$49.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.05
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
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
              <br />
              <br />
              <span className="price">$13.95</span>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.56
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
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
              <span className="price">$128.99</span>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.87
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
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
              <br />
              <div style={{ display: "flex" }}>
                <span className="price">$12.48</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Chip variant="outlined" color="primary" label="50% OFF" />
              </div>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.99
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
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
              <br />
              <span className="price">$12.49</span>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.99
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
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
              <span className="price">$128.99</span>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.87
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
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
              <br />
              <span className="price">$13.95</span>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.56
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
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
              <br />
              <br />
              <span className="price">$9.50</span>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.77
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
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
              <br />
              <br />
              <span className="price">$128.99</span>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.87
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
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
              <br />
              <br />
              <span className="price">$11.68</span>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.99
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
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
              <br />
              <div style={{ display: "flex" }}>
                <span className="price">$1.25</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Chip variant="outlined" color="secondary" label="Cool deal!" />
              </div>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.77
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
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
              <span className="price">$23.25</span>
              <span className="details">Eligible for shipping</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarRateRoundedIcon className="starrating" />
              <StarHalfRoundedIcon className="starrating" fontSize="small" />
              <span className="rating" style={{ paddingLeft: 5 }}>
                4.56
              </span>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingLeft: 4, paddingRight: 8 }}
              >
                <span>
                  <FavoriteBorderIcon />
                  Watch
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductList);
