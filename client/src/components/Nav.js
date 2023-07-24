import React,{useState} from "react";
import './Styles/Navstyle.css';
import Navimg from './Navimg/logo.png';
import userico from './Navimg/face-1.png';

export default function Nav() {

  const [activeIndex, setActiveIndex] = useState(0);

  const shrinkBtnHandler = () => {
    document.body.classList.toggle("shrink");
    setTimeout(moveActiveTab, 400);

    const shrinkBtn = document.querySelector(".shrink-btn");
    shrinkBtn.classList.add("hovered");

    setTimeout(() => {
      shrinkBtn.classList.remove("hovered");
    }, 500);
  };

  const searchHandler = () => {
    document.body.classList.remove("shrink");
    const search = document.querySelector(".search");
    search.lastElementChild.focus();
  };

  const moveActiveTab = () => {
    let topPosition = activeIndex * 58 + 2.5;
    const shortcuts = document.querySelector(".sidebar-links h4");

    if (activeIndex > 3) {
      topPosition += shortcuts.clientHeight;
    }

    const activeTab = document.querySelector(".active-tab");
    activeTab.style.top = `${topPosition}px`;
  };

  const changeLinkHandler = (e) => {
    const sidebarLinks = document.querySelectorAll(".sidebar-links a");
    sidebarLinks.forEach((sideLink) =>
      sideLink.classList.remove("active")
    );
    e.target.classList.add("active");

    setActiveIndex(e.target.dataset.active);
    moveActiveTab();
  };

  const showTooltipHandler = (e) => {
    let tooltip = e.target.parentNode.lastElementChild;
    let spans = tooltip.children;
    let tooltipIndex = e.target.dataset.tooltip;

    Array.from(spans).forEach((sp) => sp.classList.remove("show"));
    spans[tooltipIndex].classList.add("show");

    tooltip.style.top = `${
      (100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)
    }%`;
  };

  return (
    <div>
      <nav>
        <div className="sidebar-top">
          <span className="shrink-btn" onClick={shrinkBtnHandler}>
            <i className="bx bx-chevron-left"></i>
          </span>
          <img src={Navimg} className="logo" alt="" />
          <h3 className="hide">SONIC</h3>
        </div>

        <div className="search" onClick={searchHandler}>
          <i className="bx bx-search"></i>
          <input type="text" className="hide" placeholder="Quick Search ..." />
        </div>

        <div className="sidebar-links" onClick={changeLinkHandler}>
          <ul>
            <div className="active-tab"></div>
            <li className="tooltip-element" data-tooltip="0" onMouseOver={showTooltipHandler}>
              <a href="/" className="active" data-active="0" >
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                  <i className="bx bxs-tachometer"></i>
                </div>
                <span className="link hide">Home</span>
              </a>
            </li>
            <li className="tooltip-element" data-tooltip="1" onMouseOver={showTooltipHandler}>
              <a href="/" data-active="1" >
                <div className="icon">
                  <i className="bx bx-folder"></i>
                  <i className="bx bxs-folder"></i>
                </div>
                <span className="link hide">Messages</span>
              </a>
            </li>
            <li className="tooltip-element" data-tooltip="2" onMouseOver={showTooltipHandler}>
              <a href="/" data-active="2" >
                <div className="icon">
                  <i className="bx bx-message-square-detail"></i>
                  <i className="bx bxs-message-square-detail"></i>
                </div>
                <span className="link hide">Requests</span>
              </a>
            </li>
            <li className="tooltip-element" data-tooltip="3" onMouseOver={showTooltipHandler}>
              <a href="/" data-active="3" >
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
            <li className="tooltip-element" data-tooltip="0" onMouseOver={showTooltipHandler}>
              <a href="/" data-active="4">
                <div className="icon">
                  <i className="bx bx-notepad"></i>
                  <i className="bx bxs-notepad"></i>
                </div>
                <span className="link hide">Notifications</span>
              </a>
            </li>
            <li className="tooltip-element" data-tooltip="1" onMouseOver={showTooltipHandler}>
              <a href="/" data-active="5">
                <div className="icon">
                  <i className="bx bx-help-circle"></i>
                  <i className="bx bxs-help-circle"></i>
                </div>
                <span className="link hide">Help</span>
              </a>
            </li>
            <li className="tooltip-element" data-tooltip="2" onMouseOver={showTooltipHandler}>
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
          <a href="/" className="account tooltip-element" data-tooltip="0" onMouseOver={showTooltipHandler}>
            <i className="bx bx-user"></i>
          </a>
          <div className="admin-user tooltip-element" data-tooltip="1" onMouseOver={showTooltipHandler}>
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
