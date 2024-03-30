import { useLocation, useNavigate } from "react-router-dom";
import { CallIcon, InfoIcon, NextIcon, PreviousIcon } from "../../assets";

const Navigator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = ["/", "/slide2"];

  const handleNext = () => {
    navigate(routes[1]);
  };
  const handlePrev = () => {
    navigate(routes[routes.length - 2]);
  };

  const currentRouteIndex = routes.findIndex(
    (route) => route === location.pathname
  );

  return (
    <div className="d-flex justify-content-between px-4 py-3 " id="navigator">
      <img src={CallIcon} alt="call" />
      <div className="d-flex align-items-center">
        <button onClick={handlePrev} className="border-0 Btn">
          <img src={PreviousIcon} alt="previous icon" />
        </button>

        <div className="dropdown">
          <button
            className="btn text-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {currentRouteIndex + 1}
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

        <button onClick={handleNext} className="border-0 Btn">
          <img src={NextIcon} alt="next icon" />
        </button>
      </div>
      <img src={InfoIcon} alt="info icon" />
    </div>
  );
};

export default Navigator;
