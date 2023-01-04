import React from "react";
import './Styles/Navstyle.css';
import Navimg from './Navimg/logo.png';
import userico from './Navimg/face-1.png';

export default function Nav() {
  return (
    <div>
      <nav>
        <div className="sidebar-top">
          <span className="shrink-btn">
            <i className="bx bx-chevron-left"></i>
          </span>
          <img src={Navimg} className="logo" alt="" />
          <h3 className="hide">SONIC</h3>
        </div>

        <div className="search">
          <i className="bx bx-search"></i>
          <input type="text" className="hide" placeholder="Quick Search ..." />
        </div>

        <div className="sidebar-links">
          <ul>
            <div className="active-tab"></div>
            <li className="tooltip-element" data-tooltip="0">
              <a href="/" className="active" data-active="0">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                  <i className="bx bxs-tachometer"></i>
                </div>
                <span className="link hide">Home</span>
              </a>
            </li>
            <li className="tooltip-element" data-tooltip="1">
              <a href="/" data-active="1">
                <div className="icon">
                  <i className="bx bx-folder"></i>
                  <i className="bx bxs-folder"></i>
                </div>
                <span className="link hide">Messages</span>
              </a>
            </li>
            <li className="tooltip-element" data-tooltip="2">
              <a href="/" data-active="2">
                <div className="icon">
                  <i className="bx bx-message-square-detail"></i>
                  <i className="bx bxs-message-square-detail"></i>
                </div>
                <span className="link hide">Requests</span>
              </a>
            </li>
            <li className="tooltip-element" data-tooltip="3">
              <a href="/" data-active="3">
                <div className="icon">
                  <i className="bx bx-bar-chart-square"></i>
                  <i className="bx bxs-bar-chart-square"></i>
                </div>
                <span className="link hide">Activities</span>
              </a>
            </li>
            <div className="tooltip">
              <span className="show">Home</span>
              <span>Messages</span>
              <span>Requests</span>
              <span>Activities</span>
            </div>
          </ul>

          <h4 className="hide">Shortcuts</h4>

          <ul>
            <li className="tooltip-element" data-tooltip="0">
              <a href="/" data-active="4">
                <div className="icon">
                  <i className="bx bx-notepad"></i>
                  <i className="bx bxs-notepad"></i>
                </div>
                <span className="link hide">Notifications</span>
              </a>
            </li>
            <li className="tooltip-element" data-tooltip="1">
              <a href="/" data-active="5">
                <div className="icon">
                  <i className="bx bx-help-circle"></i>
                  <i className="bx bxs-help-circle"></i>
                </div>
                <span className="link hide">Help</span>
              </a>
            </li>
            <li className="tooltip-element" data-tooltip="2">
              <a href="/" data-active="6">
                <div className="icon">
                  <i className="bx bx-cog"></i>
                  <i className="bx bxs-cog"></i>
                </div>
                <span className="link hide">Settings</span>
              </a>
            </li>
            <div className="tooltip">
              <span className="show">Notifications</span>
              <span>Help</span>
              <span>Settings</span>
            </div>
          </ul>
        </div>

        <div className="sidebar-footer">
          <a href="/" className="account tooltip-element" data-tooltip="0">
            <i className="bx bx-user"></i>
          </a>
          <div className="admin-user tooltip-element" data-tooltip="1">
            <div className="admin-profile hide">
              <img src={userico} alt="" />
              <div className="admin-info">
                <h3>User Name</h3>
                <h5>USER</h5>
              </div>
            </div>
            <a href="/" className="log-out">
              <i className="bx bx-log-out"></i>
            </a>
          </div>
          <div className="tooltip">
            <span className="show">John Doe</span>
            <span>Logout</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
