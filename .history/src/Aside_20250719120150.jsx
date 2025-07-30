import { useState } from "react";
import { menuItems } from "./data.js";
import "./Aside.css";

export default function Aside() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const getIconPath = (iconName) => {
    return `/images/${iconName}${activeItem === iconName ? "-white" : "-black"}.png`;
  };

  return (
    <aside className="aside">
      <div className="outer-block-navbar">
        <div className="logo-heading">
          <h3>
            <span style={{ color: "#3986FB" }}>Dash</span>Stack
          </h3>
        </div>
        <div className="navbar-menu-1">
          <nav className="navbar">
            <ul className="ul_main">
              {menuItems.map((section, i) => (
                <div key={i} className="aside-section">
                  {section.title && <p>{section.title}</p>}
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <a
                        href="#"
                        onClick={() => setActiveItem(item.id)}
                        className={activeItem === item.id ? "active" : ""}
                      >
                        <div className="image-box">
                          <img src={getIconPath(item.icon)} alt="" />
                        </div>
                        <div>
                          <h4>{item.label}</h4>
                        </div>
                      </a>
                    </li>
                  ))}
                  {i < menuItems.length - 1 && <div className="stick"></div>}
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}
