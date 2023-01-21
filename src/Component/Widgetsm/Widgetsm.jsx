import React from "react";
import "./Widgetsm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Widgetsm() {
  return (
    <div className="widgetsm">
      <span className="widgetsm_Title"> New Member Join</span>
      <div className="widgetsm_Item">
        <span className="widgetSmTitle">
          <ul className="widgetSmList">
            <li className="widgetSmItem">
              <img
                src="https://images.pexels.com/photos/14988803/pexels-photo-14988803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Ajithkumar</span>
                <span className="widgetSmTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <VisibilityIcon className="widgetSmIcon" />
                display
              </button>
            </li>

            <li className="widgetSmItem">
              <img
                src="https://images.pexels.com/photos/14988803/pexels-photo-14988803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Anbarasu</span>
                <span className="widgetSmTitle">Mechanical Engineer</span>
              </div>
              <button className="widgetSmButton">
                <VisibilityIcon />
                display
              </button>
            </li>

            <li className="widgetSmItem">
              <img
                src="https://images.pexels.com/photos/14988803/pexels-photo-14988803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Sathish</span>
                <span className="widgetSmTitle">Mechanical Engineer</span>
              </div>
              <button className="widgetSmButton">
                <VisibilityIcon />
                display
              </button>
            </li>

            <li className="widgetSmItem">
              <img
                src="https://images.pexels.com/photos/14988803/pexels-photo-14988803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Karan</span>
                <span className="widgetSmTitle">Computer Engineer</span>
              </div>
              <button className="widgetSmButton">
                <VisibilityIcon />
                display
              </button>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}
