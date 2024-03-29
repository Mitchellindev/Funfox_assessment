import { Outlet } from "react-router-dom";
import {
  BagIcon,
  ClosedBookIcon,
  GraduationCap,
  Logo,
  OpenBookIcon,
  PencilIcon,
  RulerIcon,
} from "../assets";
import Card from "../components/Card/Card";
import Navigator from "../components/Navigator/Navigator";
import "./Layout.css";

function Layout() {
  return (
    <>
      <div className=" justify-content-center align-items-center app_container ">
        <img src={Logo} alt="funfox logo" />
        {/* {currentSlide == 0 && <img src={WeekOne} alt="funfox logo" />} */}
        <div className="d-flex  main">
          <div className="d-flex flex-column justify-content-between">
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
          <div className="d-flex flex-shrink flex-column justify-content-between">
            <div>
              <img src={RulerIcon} alt=" ruler" />
            </div>
            <div>
              <img src={ClosedBookIcon} alt="closed book" />
            </div>
            <div>
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
