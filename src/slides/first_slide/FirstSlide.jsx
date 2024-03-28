import {
  CharacterElement,
  ChildImage,
  PlotElement,
  ProblemElement,
  ResolutionElement,
  SettingElement,
} from "../../assets/index.js";
import "./FirstSlide.css";

function FirstSlide() {
  return (
    <>
      <div className="d-flex-row m-auto  justify-content-center align-items-center rounded-4  py-3 px-4 z-0 main_container">
        <div>
          <h2 className="rounded-pill px-4 py-1 text-white m-auto mb-2 text-center">
            Elements of Story Writing
          </h2>
          <p className="mb-2">
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey? Over the next week, we will be practicing the different
            elements of story writing. Our aim is to make stories more
            interesting and exciting.
          </p>
          <div className="d-flex align-items-center text-white px-3 py-1 rounded-3 elements_container ">
            <p>
              There are elements which make the foundation for story writing. An
              element is an essential part of something and every fiction story
              has the same key elements:
            </p>
            <img src={ChildImage} alt="child thinking" />
          </div>
          <div className="d-flex justify-content-between align-items-center my-2">
            <img src={SettingElement} alt="" />
            <img src={CharacterElement} alt="" />
            <img src={PlotElement} alt="" />
            <img src={ProblemElement} alt="" />
            <img src={ResolutionElement} alt="" />
          </div>
          <p>
            You must be familiar with some of these. If not, do not worry! we
            will cover all these elements as we go along.
          </p>
          <div className="lesson px-5 pt-3  w-100">
            <p className="mb-2">
              For today’s lesson, we will try to understand and practice writing
              the setting for our stories.
            </p>
            <p>The setting is an important element of every fiction story.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSlide;
