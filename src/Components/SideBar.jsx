import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SideBarData from "./SideBarData";

import "./SideBar.css";

export default function SideBar() {
  const [allSideBarData, setAllSideBarData] = useState(SideBarData);


  console.log(allSideBarData);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {allSideBarData.map((groupTitle) => (
          <div key={groupTitle.id} className="sidebarMenu">
            <h3 className="sidebarTitle">{groupTitle.title}</h3>

            {groupTitle.infos.map((routItem) => (
              <div key={routItem.id} className="sidebarList">
                <NavLink to={routItem.to} className="link">
                  <routItem.icon className="sidebarIcon" />
                  {routItem.title}
                </NavLink>
              </div>

              // <ul key={routItem.id} className="sidebarList">
              //   <Link to={routItem.to} className="link" onClick={()=>{setIsLinkActive(true)}}>
              //     <li className={`sidebarListItem ${isLinkActive ? "active" : ""}`}>
              //       <routItem.icon className="sidebarIcon"/>
              //       {routItem.title}
              //     </li>
              //   </Link>
              // </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
