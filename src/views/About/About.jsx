import React from "react";
import "./About.css";

import NotCutePic from "../../assets/needchapstick.png";

function FactButton(props) {
  return (
  <div
      onClick={() => {
      props.setActiveButton(props.button);
    }}
    className="intro-button">
    <p>{props.button}</p>
  </div>
  )
}

export default function AboutScreen() {
  const [activeButton, setActiveButton] = React.useState("Random Fact...");

  return (
      <div className="screen-background">
        <div className="intro-background">
          <div className="intro-item">
            <img src={NotCutePic} className="intro-picture" />
          </div>
          <div className="intro-item" style={{marginTop: "15px"}}>
            Hello! My name is Aracely, and I'm currently a college freshman
            planning on concentrating in CS or Biomedical Engineering. Click one of the buttons on the right
            for some quick facts about me!
          </div>
          <div className="intro-item" style={{flexDirection: "column"}}>
            <FactButton
              button="I can speak Quechua (an indegineous language originating from the Incan Empire)."
              setActiveButton={setActiveButton}>
            </FactButton>
            <FactButton
              button= "The only sports injuries I recieved was a concussion and broken tooth from a wrestling match."
              setActiveButton={setActiveButton}>
            </FactButton>
          </div>

        </div>
        <div className="item-background" style={{textAlign: "center", color: "tan"}}>
            <h1>{activeButton}</h1>
        </div>
      </div>
  )
}
