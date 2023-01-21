import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PaidIcon from "@mui/icons-material/Paid";
import ReportIcon from "@mui/icons-material/Report";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MessageIcon from "@mui/icons-material/Message";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
export default function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle ">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <LineStyleIcon />
                Home
              </li>
              <li className="sidebarListItem">
                <TimelineIcon />
                TimeLines
              </li>
              <li className="sidebarListItem">
                <TrendingUpIcon />
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem  ">
                <PersonOutlineIcon />
                <span href="/users"> Users</span>
              </li>
              <li className="sidebarListItem">
                <Inventory2Icon />
                Products
              </li>
              <li className="sidebarListItem">
                <PaidIcon />
                Transaction
              </li>
              <li className="sidebarListItem">
                <EqualizerIcon />
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem  ">
                <MailOutlineIcon />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeedIcon />
                Feedback
              </li>
              <li className="sidebarListItem">
                <MessageIcon />
                Messages
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem  ">
                <WorkOutlineIcon />
                Manage
              </li>
              <li className="sidebarListItem">
                <TimelineIcon />
                Ananlytics
              </li>
              <li className="sidebarListItem">
                <ReportIcon />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
