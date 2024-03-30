import PropTypes from "prop-types";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";
import { Cancel, ClockIcon, HouseIcon } from "../../assets/index.js";
import "./GuideSheet.css";

function GuideSheet({ onCancel }) {
  return (
    <div className="guide_sheet">
      <div className="guide_sheet_content text-white">
        <div className="cancel_div">
          <img src={Cancel} alt="" onClick={onCancel} />
        </div>
        <div className="d-flex flex-column justify-content-center ps-3 h-100">
          <p>So, what do you think the definition of setting is?</p>
          <Form>
            <FormGroup row>
              <Label for="guesses" className="guesses" sm={3}>
                Any guesses?
              </Label>
              <Col sm={5}>
                <Input id="guesses" name="guesses" type="text" />
              </Col>
              <Col sm={4}>
                <span className="me-2 guesses">Hint: </span>
                <img src={ClockIcon} alt="clock" className="me-1" />
                <img src={HouseIcon} alt="house" />
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

GuideSheet.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default GuideSheet;
