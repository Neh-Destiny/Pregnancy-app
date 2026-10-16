// import {ChevronLeft, Search, Lightbulb} from "lucide-react";
import ironImg from "../assets/iron.jpg";
import calciumImg from "../assets/calcium.jpg";
import folateImg from "../assets/folate.jpg";
import proteinImg from "../assets/protein.jpg";
import fatsImg from "../assets/fats.jpg";
import fibreImg from "../assets/fibre.jpg";
import "./Nutrition.css";

export default function Nutrition() {
  const nutrients = [
    {
      title: "Iron",
      description: "Supports healthy blood & oxygen",
      amount: "27-30mg daily", 
      image: ironImg,
      className: "card-iron",
    },
    {
      title: "Calcium",
      description: "Builds baby's bones & teeth",
      amount: "1000mg daily",
      image: calciumImg,
      className: "card-calcium",
    },
    {
      title: "Folate",
      description: "Prevents neural tube defects",
      amount: "400-600mcg daily",
      image: folateImg,
      className: "card-folate",
    },
    {
      title: "Protein",
      description: "Supports growth & development",
      amount: "71g daily",
      image: proteinImg,
      className: "card-protein",
    },
    {
      title: "Healthy Fats",
      description: "Brain & eye development",
      amount: "Omega-3 focused",
      image: fatsImg,
      className: "card-fats",
    },
    { 
      title: "Fibre",
      description: "Aids digestion & reduces constipation",
      amount: "25-30g daily",
      image: fibreImg,
      className: "card-fibre"
    }
  ];

  return (
    <div className="nutrition-page-wrapper">
      <div className="frame">
        <div className="header-section">
<div className="nav-bar">
<div></div>

            <h1 className="page-title">Nutrition Guide</h1>
            {/* <button className="icon-btn" aria-label="Options"> */}
            {/* </button> */}
          </div>

          <p className="subtitle">6 essential nutrients for pregnancy</p>
        </div>
        <div className="nutrients-grid">
          {nutrients.map((item, index) => (
            <div key={index} className={`nutrient-card ${item.className}`}>
              <div>
                <div className="card-top">
                  <img src={item.image} alt={item.title} className="card-icon-img" />
                  <span className="card-tag">{item.label}</span>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <p className="card-description">{item.description}</p>
              </div>
              <div className="amount-badge">
                <span className="amount-text">{item.amount}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-banner-wrapper">
          <div className="tip-banner">
            <div className="tip-text-wrapper">
              <span className="tip-label">Note:</span>
               <p className="tip-text">
             Pair iron with Vitamin C foods for better absorption.
            </p>
            </div>
          </div>
        </div>
        <div className="home-indicator-bar">
          <div className="home-indicator"></div>
        </div>

      </div>
    </div>
  );
}