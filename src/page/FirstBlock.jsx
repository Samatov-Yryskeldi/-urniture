import React from "react";
import "../page/style/First.css";
import Background from "../assets/11.svg";
import Cyber from "../assets/Cyberpunk_2077_logo 1.svg";
import Inst from "../assets/Group 107.svg";
const FirstBlock = () => {
  return (
    <div>
      <div className="container">
        <div className="container-block">
          <img src={Background} alt="" />
          <div className="header-img">
            <img src={Cyber} alt="" />
            <img src={Inst} alt="" />
            <div className="mini-block">
              <div className="mini-text">
                <p>Доступно на всех платформах</p>
                <div className="mini-button">
                  <button>Узнать больше </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlock;
