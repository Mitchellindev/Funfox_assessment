import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ children }) => {
  return (
    <div className="d-flex-row m-auto  justify-content-center align-items-center rounded-4  py-3 px-4 z-0  main_container">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
