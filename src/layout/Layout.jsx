import { Outlet, useLocation } from "react-router-dom";
import {
  BagIcon,
  ClosedBookIcon,
  GraduationCap,
  Logo,
  OpenBookIcon,
  PencilIcon,
  QuestionIcon,
  RulerIcon,
  WeekOne,
} from "../assets";
import Card from "../components/Card/Card";
import Navigator from "../components/Navigator/Navigator";
import "./Layout.css";

function Layout() {
  const location = useLocation();
  return (
    <>
      <div className=" app_container ">
        <img src={Logo} alt="funfox logo" />
        {location.pathname === "/" && <img src={WeekOne} alt="week one" />}
        <div className="d-flex justify-content-center align-items-between main">
          <div className="d-flex flex-column curly-dashes justify-content-between">
            <div>
              <img src={PencilIcon} alt="pencil" />
            </div>
            <div>
              <img src={BagIcon} alt="bag" />
            </div>
            <div>
              <img src={OpenBookIcon} alt="open book" />
            </div>
          </div>
          <Card>
            <Outlet />
          </Card>
          <div className="d-flex curly-line flex-column justify-content-between">
            <div>
              <img src={RulerIcon} alt=" ruler" />
            </div>
            <div className="ms-auto">
              {location.pathname === "/" && (
                <img src={ClosedBookIcon} alt="closed book" />
              )}

              {location.pathname === "/slide2" && (
                <img src={QuestionIcon} alt="question icon" />
              )}
            </div>
            <div className="ms-auto">
              <img src={GraduationCap} alt="cap" />
            </div>
          </div>
        </div>
        <Navigator />
      </div>
    </>
  );
}

export default Layout;
