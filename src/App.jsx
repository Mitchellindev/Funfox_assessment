import "./App.css";
import {
  BagIcon,
  CallIcon,
  ClosedBookIcon,
  GraduationCap,
  InfoIcon,
  Logo,
  NextIcon,
  OpenBookIcon,
  PencilIcon,
  PreviousIcon,
  RulerIcon,
} from "./assets";
import FirstSlide from "./slides/first_slide/FirstSlide";

function App() {
  return (
    <>
      <div className=" position-relative justify-content-center align-items-center app_container ">
        <img src={Logo} alt="funfox logo" />
        <div className="d-flex gap-1 ">
          <div className="d-flex flex-column justify-content-between">
            <div>
              <img src={PencilIcon} alt="" />
            </div>
            <div>
              <img src={BagIcon} alt="" />
            </div>
            <div>
              <img src={OpenBookIcon} alt="" />
            </div>
          </div>
          <FirstSlide />
          <div className="d-flex flex-column justify-content-between">
            <div>
              <img src={RulerIcon} alt="" />
            </div>
            <div>
              <img src={ClosedBookIcon} alt="" />
            </div>
            <div>
              <img src={GraduationCap} alt="" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between px-4 py-3 " id="footer">
          <img src={CallIcon} alt="call" />
          <div>
            <img src={PreviousIcon} alt="previous icon" />
            <div className="btn-group">
              <button
                type="button"
                className="btn  dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <img src={NextIcon} alt="next icon" />
          </div>
          <img src={InfoIcon} alt="info icon" />
        </div>
      </div>
    </>
  );
}

export default App;
