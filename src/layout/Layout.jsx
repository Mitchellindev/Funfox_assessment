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
import FirstSlide from "../components/FirstSlide/FirstSlide";
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
              <img src={PencilIcon} alt="" />
            </div>
            <div>
              <img src={BagIcon} alt="" />
            </div>
            <div>
              <img src={OpenBookIcon} alt="" />
            </div>
          </div>
          <Card>
            <FirstSlide />
            <Outlet />
          </Card>
          <div className="d-flex flex-shrink flex-column justify-content-between">
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
        <Navigator />
      </div>
    </>
  );
}

export default Layout;
