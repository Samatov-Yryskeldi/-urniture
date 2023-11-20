import React from "react";
import "../../style/FirstBlock.css";
import Logo from "../../assets/Logo (5).svg";
import Cute from "../../assets/GraphicLines_mainscreen.svg";
import Chair from "../../assets/image 7.svg";
import Inst from "../../assets/Ellipse 4.svg";
import Modal from "./Modal/Modal";
import { useState } from "react";
const FirstBlock = () => {
  const [modalActive, setModalActive] = useState(false);
  const openModal = () => {
    setModalActive(true);
  };
  return (
    <div>
      <div className="section">
        <div className="section-logo">
          <img src={Logo} alt="" />
          <div className="section-rig-back">
            <img src={Cute} alt="" />
            <div className="section-chair">
              <img src={Chair} alt="" />
              <div className="main-text">
                <p>
                  Изготовление мебели
                  <br />
                  из натурального дерева
                  <br /> на собственном производстве
                </p>
                <span>
                  Любая мебель по вашим пожелиниям
                  <br /> из чисто экологичных материалов{" "}
                </span>
                <div className="sec-button">
                  <button>Оставить заявку</button>
                  <p>
                    От идеи до
                    <br /> реализации один шаг
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="section-number">
          <p>+7 (777) 777 77</p>
          <b>manufacturing@gmail.com</b>
          <img src={Inst} alt="" />{" "}
          <button onClick={openModal}>Оставить за</button>
          {modalActive && <Modal setActive={setModalActive} />}
        </div>
      </div>
    </div>
  );
};

export default FirstBlock;
