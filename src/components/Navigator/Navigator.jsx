import { Link } from "react-router-dom";
import { CallIcon, InfoIcon, NextIcon, PreviousIcon } from "../../assets";

const Navigator = () => {
  const routes = ["/", "/slide2"];
  return (
    <div className="d-flex justify-content-between px-4 py-3 " id="navigator">
      <img src={CallIcon} alt="call" />
      <div className="d-flex align-items-center">
        <Link to={routes[0]}>
          <img src={PreviousIcon} alt="previous icon" />
        </Link>
        <div className="dropdown">
          <button
            className="btn text-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {routes.length - 1}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2
              </a>
            </li>
          </ul>
        </div>

        <Link to={routes[1]}>
          <img src={NextIcon} alt="next icon" />
        </Link>
      </div>
      <img src={InfoIcon} alt="info icon" />
    </div>
  );
};

export default Navigator;
