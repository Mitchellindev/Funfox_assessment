import { useState } from "react";
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
  WeekOne,
} from "./assets";
import FirstSlide from "./slides/first_slide/FirstSlide";

import SecondSlide from "./slides/second_slide/SecondSlide";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [<FirstSlide key={0} />, <SecondSlide key={1} />];
  return (
    <>
      <div className=" justify-content-center align-items-center app_container ">
        <img src={Logo} alt="funfox logo" />
        {currentSlide == 0 && <img src={WeekOne} alt="funfox logo" />}
        <div className="d-flex gap-1 main">
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
          {slides[currentSlide]}
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
          <div className="d-flex align-items-center">
            <img
              src={PreviousIcon}
              alt="previous icon"
              onClick={() => {
                setCurrentSlide((prev) => Math.max(0, prev - 1));
              }}
            />
            <div className="dropdown">
              <button
                className="btn text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currentSlide + 1}
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

            <img
              src={NextIcon}
              alt="next icon"
              onClick={() => {
                setCurrentSlide((prev) =>
                  Math.min(slides.length - 1, prev + 1)
                );
              }}
            />
          </div>
          <img src={InfoIcon} alt="info icon" />
        </div>
      </div>
    </>
  );
}

export default App;
