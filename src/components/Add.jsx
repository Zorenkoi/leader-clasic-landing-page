import add1Img from "../assets/add-icon1.png";
import add2Img from "../assets/add-icon2.png";
import add3Img from "../assets/add-icon3.png";
import add4Img from "../assets/add-icon4.png";
import "../styles/add.css";

const Add = () => {
  return (
    <section className="add-section">
      <div className="container">
        <ul className="add-list">
          <li className="add-item">
            <img src={add1Img} alt="" className="add-img" />
            <h3 className="add-title text">FxPro Trading Platform</h3>
            <p className="add-text">Level up with out priorietary products</p>
          </li>
          <li className="add-item">
            <img src={add2Img} alt="" className="add-img" />
            <h3 className="add-title text">FxPro Trading Platform</h3>
            <p className="add-text">Level up with out priorietary products</p>
          </li>
          <li className="add-item">
            <img src={add3Img} alt="" className="add-img" />
            <h3 className="add-title text">FxPro Trading Platform</h3>
            <p className="add-text">Level up with out priorietary products</p>
          </li>
          <li className="add-item">
            <img src={add4Img} alt="" className="add-img" />
            <h3 className="add-title text">FxPro Trading Platform</h3>
            <p className="add-text">Level up with out priorietary products</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Add;
