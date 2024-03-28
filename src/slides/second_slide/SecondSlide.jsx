import { Col, Form, FormGroup, Input, Label } from "reactstrap";
import {
  ClockIcon,
  HouseIcon,
  RainyNight,
  SunnyDay,
} from "../../assets/index.js";
import "./SecondSlide.css";

function SecondSlide() {
  return (
    <>
      <div className="d-flex-row m-auto  justify-content-center align-items-center rounded-4  py-3 px-4 z-0 main_container">
        <div>
          <p className="rounded-pill  py-1  m-auto fw-normal">
            Can you figure out the definition of setting from the following
            examples?
          </p>
          <p className="my-3 ">(take a minute to think about this)</p>
          <div className="d-flex justify-content-around mt-4 text-center">
            <figure>
              <img src={SunnyDay} alt="sunny night" />
              <figcaption>Sunny day at a beach</figcaption>
            </figure>
            <figure>
              <img src={RainyNight} alt="rainy night" />
              <figcaption>
                A cold rainy night in a <br /> haunted house in October
              </figcaption>
            </figure>
          </div>
          <p>So, what do you think the definition of setting is?</p>
          <Form>
            <FormGroup row>
              <Label for="guesses" sm={3}>
                Any guesses?
              </Label>
              <Col sm={6}>
                <Input id="guesses" name="guesses" type="text" />
              </Col>
              <Col sm={3}>
                <span className="me-2">Hint: </span>
                <img src={ClockIcon} alt="clock" className="me-1" />
                <img src={HouseIcon} alt="house" />
              </Col>
            </FormGroup>
          </Form>
          <div className="text-white px-3 py-2 mb-3 rounded-3 setting ">
            <p>
              Setting is the time <img src={ClockIcon} alt="clock" /> and place{" "}
              <img src={HouseIcon} alt="house" /> of a story. It often answers
              the questions: when? and where?
            </p>
          </div>
          <p>
            The time of the story could be in the past, future, day, night,
            summer or winter. A story may take place in a school, a mall, a
            desert, an airplane or in a variety of other places.
          </p>
        </div>
      </div>
    </>
  );
}

export default SecondSlide;
