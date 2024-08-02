import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitlesSection.css";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

class TitlesSection extends Component {
  state = { color: "white" };

  changeColor = () => {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "white",
    });
  };

  render() {
    return (
      <div>
        <Fullpage className="first">
          <h1
            className="title"
            style={{ color: this.state.color }}
            onMouseOver={() => {
              this.changeColor();
            }}
            onMouseLeave={() => {
              this.changeColor();
            }}
          >
            {data.title}
          </h1>
          <h2 className="subtitle">{data.subtitle}</h2>
          <div className="icons-wrapper">
            {Object.keys(data.links).map((key) => {
              return <SocialIcon className="icon" url={data.links[key]} />;
            })}
          </div>
        </Fullpage>
        <Link to="nextPage" smooth={true} duration={500}>
          <DownIcon
            icon="down.png"
            onClick={() => console.log("I am working")}
          />
        </Link>
        <Element name="nextPage"></Element>
      </div>
    );
  }
}

export default TitlesSection;
